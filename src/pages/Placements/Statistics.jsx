import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function PlacementStatistics() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Placement Statistics"
            subtitle="Year-wise placement data and analytics"
            description="Comprehensive analysis of placement outcomes and trends"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Year 2023-24 Highlights</h2>
              <div className="grid md:grid-cols-4 gap-6 items-stretch">
                <div className="text-center card h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-[var(--brand)] mb-2">95.8%</div>
                  <p className="text-sm font-semibold">Overall Placement Rate</p>
                  <p className="text-xs text-[var(--text-dim)] mt-auto">380 out of 396 students</p>
                </div>
                <div className="text-center card h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-[var(--brand)] mb-2">₹8.5L</div>
                  <p className="text-sm font-semibold">Average Package</p>
                  <p className="text-xs text-[var(--text-dim)] mt-auto">20% increase from last year</p>
                </div>
                <div className="text-center card h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-[var(--brand)] mb-2">₹22L</div>
                  <p className="text-sm font-semibold">Highest Package</p>
                  <p className="text-xs text-[var(--text-dim)] mt-auto">International consulting role</p>
                </div>
                <div className="text-center card h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-[var(--brand)] mb-2">45</div>
                  <p className="text-sm font-semibold">Companies Visited</p>
                  <p className="text-xs text-[var(--text-dim)] mt-auto">15% increase from 2022-23</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Program-wise Placement Statistics (2023-24)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Program</th>
                      <th className="text-left p-3">Total Students</th>
                      <th className="text-left p-3">Placed</th>
                      <th className="text-left p-3">Placement %</th>
                      <th className="text-left p-3">Avg Package (LPA)</th>
                      <th className="text-left p-3">Highest Package (LPA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">MBA</td>
                      <td className="p-3">156</td>
                      <td className="p-3">152</td>
                      <td className="p-3">97.4%</td>
                      <td className="p-3">9.2</td>
                      <td className="p-3">22.0</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">PGDM</td>
                      <td className="p-3">120</td>
                      <td className="p-3">115</td>
                      <td className="p-3">95.8%</td>
                      <td className="p-3">8.1</td>
                      <td className="p-3">18.5</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)] bg-surface-1">
                      <td className="p-3 font-bold">Total</td>
                      <td className="p-3 font-bold">276</td>
                      <td className="p-3 font-bold">267</td>
                      <td className="p-3 font-bold">96.7%</td>
                      <td className="p-3 font-bold">8.7</td>
                      <td className="p-3 font-bold">22.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Sector-wise Placement Distribution</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Industry Sectors (2023-24)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Information Technology</span>
                      <span className="text-sm font-semibold">28% (106 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Banking & Financial Services</span>
                      <span className="text-sm font-semibold">22% (84 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '22%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Consulting</span>
                      <span className="text-sm font-semibold">18% (68 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '18%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">E-commerce & Retail</span>
                      <span className="text-sm font-semibold">15% (57 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Manufacturing</span>
                      <span className="text-sm font-semibold">10% (38 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '10%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Others</span>
                      <span className="text-sm font-semibold">7% (27 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--brand)] h-2 rounded-full" style={{width: '7%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Functional Areas (2023-24)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sales & Marketing</span>
                      <span className="text-sm font-semibold">25% (95 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Finance</span>
                      <span className="text-sm font-semibold">22% (84 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '22%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Operations</span>
                      <span className="text-sm font-semibold">20% (76 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Human Resources</span>
                      <span className="text-sm font-semibold">15% (57 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Information Technology</span>
                      <span className="text-sm font-semibold">12% (46 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Analytics</span>
                      <span className="text-sm font-semibold">6% (22 students)</span>
                    </div>
                    <div className="w-full bg-[var(--surface-2)] rounded-full h-2">
                      <div className="bg-[var(--accent)] h-2 rounded-full" style={{width: '6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>5-Year Placement Trends</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Academic Year</th>
                      <th className="text-left p-3">Total Students</th>
                      <th className="text-left p-3">Placement %</th>
                      <th className="text-left p-3">Avg Package (LPA)</th>
                      <th className="text-left p-3">Companies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">2023-24</td>
                      <td className="p-3">396</td>
                      <td className="p-3">95.8%</td>
                      <td className="p-3">8.5</td>
                      <td className="p-3">45</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">2022-23</td>
                      <td className="p-3">375</td>
                      <td className="p-3">93.2%</td>
                      <td className="p-3">7.8</td>
                      <td className="p-3">39</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">2021-22</td>
                      <td className="p-3">355</td>
                      <td className="p-3">91.5%</td>
                      <td className="p-3">7.2</td>
                      <td className="p-3">35</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">2020-21</td>
                      <td className="p-3">340</td>
                      <td className="p-3">89.7%</td>
                      <td className="p-3">6.8</td>
                      <td className="p-3">32</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">2019-20</td>
                      <td className="p-3">325</td>
                      <td className="p-3">88.3%</td>
                      <td className="p-3">6.5</td>
                      <td className="p-3">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Top Recruiting Companies (2023-24)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technology Sector</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>TCS</span>
                      <span className="font-semibold">25 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Infosys</span>
                      <span className="font-semibold">22 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Accenture</span>
                      <span className="font-semibold">18 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>IBM</span>
                      <span className="font-semibold">15 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wipro</span>
                      <span className="font-semibold">12 students</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Financial Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>HDFC Bank</span>
                      <span className="font-semibold">20 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ICICI Bank</span>
                      <span className="font-semibold">18 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Axis Bank</span>
                      <span className="font-semibold">14 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bajaj Finance</span>
                      <span className="font-semibold">12 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>SBI Life</span>
                      <span className="font-semibold">10 students</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Consulting & Others</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Deloitte</span>
                      <span className="font-semibold">16 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>EY</span>
                      <span className="font-semibold">14 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Amazon</span>
                      <span className="font-semibold">12 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Flipkart</span>
                      <span className="font-semibold">10 students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Reliance</span>
                      <span className="font-semibold">8 students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Salary Package Distribution (2023-24)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Package Ranges</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Above ₹15 LPA</span>
                      <span className="text-sm font-semibold">8% (30 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹10-15 LPA</span>
                      <span className="text-sm font-semibold">22% (84 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹7-10 LPA</span>
                      <span className="text-sm font-semibold">35% (133 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹5-7 LPA</span>
                      <span className="text-sm font-semibold">25% (95 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">₹3-5 LPA</span>
                      <span className="text-sm font-semibold">10% (38 students)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Statistics</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Median Package:</strong> ₹8.2 LPA</li>
                    <li><strong>Mode Package:</strong> ₹7.5 LPA</li>
                    <li><strong>Standard Deviation:</strong> ₹2.8 LPA</li>
                    <li><strong>Students above Avg:</strong> 52%</li>
                    <li><strong>International Offers:</strong> 5 students</li>
                    <li><strong>Pre-Placement Offers:</strong> 45 students</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Geographic Distribution of Placements</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">35%</div>
                  <p className="text-sm">Bangalore</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">28%</div>
                  <p className="text-sm">Hyderabad</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">18%</div>
                  <p className="text-sm">Chennai</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">19%</div>
                  <p className="text-sm">Other Cities</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Success Metrics & Achievements</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Ranked among top 10 business schools in South India for placement outcomes</li>
                <li>100% placement assistance provided to all eligible students</li>
                <li>Average 20% year-on-year growth in placement packages</li>
                <li>85% of students placed within first 3 months of placement season</li>
                <li>95% student satisfaction rate with placement support and outcomes</li>
                <li>Strong alumni network with 80% in leadership positions within 5 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}