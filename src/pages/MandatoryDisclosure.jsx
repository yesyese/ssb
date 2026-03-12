import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { supabase, DOCUMENTS_TABLE, PDF_BUCKET, MAX_FILE_SIZE_MB } from '../lib/supabase';
import { Upload, FileText, ExternalLink, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const MANDATORY_CRITERION_ID = 'mandatory-disclosure';

const SECTIONS = [
  {
    id: 'policies',
    title: 'Policies',
    rows: [
      { sn: 1, name: 'Employee Welfare Policy', slotId: 'policies-1' },
      { sn: 2, name: 'ERP Policy', slotId: 'policies-2' },
      { sn: 3, name: 'Gender Equity Policy', slotId: 'policies-3' },
      { sn: 4, name: 'Green Policy', slotId: 'policies-4' },
      { sn: 5, name: 'Grievances Redressal Policy', slotId: 'policies-5' },
      { sn: 6, name: 'Institute Policy On Scholarships And Freeships', slotId: 'policies-6' },
      { sn: 7, name: 'IT Policy', slotId: 'policies-7' },
      { sn: 8, name: 'National & International Commemorative Programs Celebrations Policy', slotId: 'policies-8' },
      { sn: 9, name: 'UGC Fee Refund Policy 2024-25', slotId: 'policies-9' },
    ],
  },
  {
    id: 'nirf',
    title: 'NIRF',
    rows: [
      { sn: 1, name: 'NIRF Participation Certificates', slotId: 'nirf-1' },
      { sn: 2, name: 'NIRF 2024-25 Report', slotId: 'nirf-2' },
    ],
  },
  {
    id: 'jntu',
    title: 'JNTU',
    rows: [{ sn: 1, name: 'JNTU Approvals', slotId: 'jntu-1' }],
  },
  {
    id: 'iso',
    title: 'ISO',
    rows: [
      { sn: 1, name: 'ISO 9001', slotId: 'iso-1' },
      { sn: 2, name: 'ISO 14001', slotId: 'iso-2' },
      { sn: 3, name: 'ISO 50001', slotId: 'iso-3' },
    ],
  },
  {
    id: 'aicte',
    title: 'AICTE',
    rows: [{ sn: 1, name: 'AICTE Approvals', slotId: 'aicte-1' }],
  },
  {
    id: 'ugc',
    title: 'UGC',
    rows: [
      { sn: 1, name: 'UGC 2(f) Affiliation Certificate', slotId: 'ugc-1' },
      { sn: 2, name: 'UGC Autonomous and Undertaking', slotId: 'ugc-2' },
      { sn: 3, name: 'UGC Autonomous Conferment Letter', slotId: 'ugc-3' },
    ],
  },
  {
    id: 'icc',
    title: 'ICC',
    rows: [{ sn: 1, name: 'ICC - Internal Complaint Committee - SSB', slotId: 'icc-1' }],
  },
  {
    id: 'aishe',
    title: 'AISHE',
    rows: [{ sn: 1, name: 'AISHE Certificate', slotId: 'aishe-1' }],
  },
];

function useMandatoryDocs(refreshToken) {
  const [bySlot, setBySlot] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    async function fetchDocs() {
      const { data, error } = await supabase
        .from(DOCUMENTS_TABLE)
        .select('section_id, sub_subsection_id, title, file_url')
        .eq('criterion_id', MANDATORY_CRITERION_ID)
        .not('section_id', 'is', null)
        .not('sub_subsection_id', 'is', null);
      if (cancelled) return;
      if (error) {
        setBySlot({});
        setLoading(false);
        return;
      }
      const map = {};
      (data || []).forEach((row) => {
        if (!row.file_url) return;
        const key = `${row.section_id || ''}|${row.sub_subsection_id || ''}`;
        map[key] = { title: row.title || 'Document', url: row.file_url };
      });
      setBySlot(map);
      setLoading(false);
    }
    fetchDocs();
    return () => {
      cancelled = true;
    };
  }, [refreshToken]);

  return { bySlot, loading };
}

function DocumentCell({ sectionId, slotId, label, bySlot, onUploaded }) {
  const key = `${sectionId}|${slotId}`;
  const existing = bySlot[key];
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
    if (file.size > maxBytes) {
      setError(
        `File size must be under ${MAX_FILE_SIZE_MB} MB. Your file is ${(file.size / (1024 * 1024)).toFixed(1)} MB.`,
      );
      e.target.value = '';
      return;
    }

    setError('');
    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'pdf';
      const path = `mandatory/${sectionId}/${slotId}-${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from(PDF_BUCKET).upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });
      if (uploadError) {
        const msg = uploadError.message || 'Upload failed';
        if (msg.toLowerCase().includes('exceeded') && msg.toLowerCase().includes('size')) {
          throw new Error(
            `${msg} Supabase Free plan allows 50MB. For larger files, adjust Global file size limit in Storage settings (Pro plan).`,
          );
        }
        throw new Error(msg);
      }

      const { data: urlData } = supabase.storage.from(PDF_BUCKET).getPublicUrl(path);
      const fileUrl = urlData?.publicUrl || '';

      const row = {
        title: label || file.name,
        file_path: path,
        file_url: fileUrl,
        criterion_id: MANDATORY_CRITERION_ID,
        section_id: sectionId,
        subsection_id: null,
        sub_subsection_id: slotId,
      };

      const { error: insertError } = await supabase.from(DOCUMENTS_TABLE).insert(row);
      if (insertError) throw new Error(insertError.message || 'Saving record failed');

      setSuccess(true);
      onUploaded?.();
      e.target.value = '';
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  if (existing) {
    return (
      <a
        href={existing.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--brand-light)] hover:text-[var(--brand)] hover:underline"
      >
        <FileText className="w-4 h-4" />
        <span>View Document</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
      </a>
    );
  }

  return (
    <div className="space-y-1">
      <label className="inline-flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-[var(--text-soft)] hover:text-[var(--brand)]">
        <Upload className="w-4 h-4" />
        <span>{uploading ? 'Uploading…' : 'Upload (one-time)'}</span>
        <input type="file" accept=".pdf,application/pdf" onChange={handleFileChange} className="sr-only" />
      </label>
      {uploading && <Loader2 className="w-4 h-4 animate-spin text-[var(--brand)]" />}
      {success && (
        <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
          <CheckCircle className="w-3.5 h-3.5" />
          Uploaded.
        </span>
      )}
      {error && (
        <p className="text-[0.7rem] text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function MandatoryDisclosure() {
  const [refresh, setRefresh] = useState(0);
  const { bySlot, loading } = useMandatoryDocs(refresh);

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Mandatory Disclosure"
            subtitle="Institutional policies, approvals, and statutory documents"
            description="View official policies, approvals, accreditation documents, and statutory disclosures of Sanskrithi School of Business."
          />

          <div className="space-y-section">
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Overview</h2>
              <p className="text-[var(--text-soft)] mb-2">
                As per regulatory requirements, the institution publishes key policies, approvals, and accreditation
                documents for stakeholders, students, and the public.
              </p>
              <p className="text-[var(--text-muted)] text-sm">
                Documents listed below are maintained centrally and updated by the administration. Each document slot
                supports a single upload, ensuring consistent and verified information.
              </p>
            </Card>

            {SECTIONS.map((section) => (
              <Card key={section.id}>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-4">{section.title}</h2>
                <div className="overflow-x-auto rounded-xl border border-[var(--border-light)] bg-[var(--surface-0)]">
                  <table className="w-full min-w-[320px] text-sm">
                    <thead className="bg-[var(--surface-1)]">
                      <tr>
                        <th className="px-3 py-2 text-left w-14 text-[var(--text-soft)] font-semibold text-xs sm:text-sm">
                          S.No
                        </th>
                        <th className="px-3 py-2 text-left text-[var(--text-soft)] font-semibold text-xs sm:text-sm">
                          Document Name
                        </th>
                        <th className="px-3 py-2 text-left w-40 text-[var(--text-soft)] font-semibold text-xs sm:text-sm">
                          View / Upload
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row) => (
                        <tr key={row.slotId} className="border-t border-[var(--border-light)]">
                          <td className="px-3 py-2 align-top text-[var(--text-muted)] text-xs sm:text-sm">{row.sn}</td>
                          <td className="px-3 py-2 align-top text-[var(--text)] text-xs sm:text-sm break-words">
                            {row.name}
                          </td>
                          <td className="px-3 py-2 align-top">
                            <DocumentCell
                              sectionId={section.id}
                              slotId={row.slotId}
                              label={row.name}
                              bySlot={bySlot}
                              onUploaded={() => setRefresh((v) => v + 1)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            ))}

            {loading && (
              <p className="text-[var(--text-muted)] text-xs">
                Loading document status… (Uploads are visible as &quot;View Document&quot; links when available.)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

