import { Property, InsightArticle, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Premium Central Kitchen @ Mandai',
    type: 'Central Kitchen',
    transaction: 'For Sale',
    price: 2450000,
    priceFormatted: '$2,450,000',
    power: 150,
    powerFormatted: '150A',
    ceiling: '7.0m',
    region: 'Mandai',
    sfaApproved: true,
    loadingBay: true,
    tags: ['SFA APPROVED', 'HIGH CEILING'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkF_SNPVsS86Tq6EV070HIocOrTdKKVUCJZwgGgZXt4FHW-l8GMOrKugLbu9gSn-vjZFfS34GEhoKQT-kyIjYy02BEvohhoiljpGVpC1ZJvqdfHikwnJwfbUuknj2KqNV6MDYb5wLH4NoKUiNa-GbBPhJVGYJSfnlb-ZWFP92tob3XULk_h9QEV_e1bNhGMw5APQFB02j-ojH92qTI2Dv_cwUV28oxOTAaKoBvvCdZSuG8Y1mpUbl-wVJcr106jzqnCzzp7ADyqev3',
    badge: 'FOR SALE'
  },
  {
    id: 'prop-2',
    title: 'Cold Chain Hub @ Tuas South',
    type: 'Cold Storage',
    transaction: 'For Lease',
    price: 15000, // Monthly lease value for filtering
    priceFormatted: 'Lease: $3.50 psf',
    power: 200,
    powerFormatted: '200A 3-Phase',
    loading: '15kN/sqm',
    region: 'Tuas South',
    sfaApproved: true,
    loadingBay: true,
    tags: ['COLD STORAGE', '40FT ACCESSIBLE'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX0sbCBRe5ue6RzUTs_1zoRKJM8lV7cyzB7gXZF8pPjiDrd0lBDa7EafEKyVzIbbCDckNBelaN6AazIxZeE1qRbEcAKE_GD8IzgamuAYqWDCCFYF7yKqszDELAwUj5KpCf5ybXYZeTX_yaXV-W9-ZWuvrBBYr8KBOLEpLi5D3HeNMmwnsL-jjMQQ5RO6gWE6Z4YpQ6MroTEt-Po2OB1hx1CWBlqCeLIERI0NMvLgFwjvZwlH6b3MW-86w8jaQI838bl1oC2-9V7DIt',
    badge: 'FOR LEASE'
  },
  {
    id: 'prop-3',
    title: 'Dedicated Food Factory @ Senoko',
    type: 'Food Factory',
    transaction: 'For Sale',
    price: 4200000,
    priceFormatted: '$4,200,000',
    power: 300,
    powerFormatted: '300A',
    loading: '20kN/sqm',
    region: 'Senoko',
    sfaApproved: true,
    loadingBay: true,
    tags: ['NEA COMPLIANT', 'GAS CONNECTION'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzUO7RY8sF1Ks3Mjs2oc8tbH7GyDXPW7jPPFvvswfYWi2c4j0qHKi2fhjxwswNLkDj8ubLUAP4fVha7zyMuKxGj1WZYULxaVMmMIWCuu97pMq6px1cRfonVuE0vUCfXSrwOlkhIPjLUtJeS2NfUFlScEb3zMtbZ4mBmHKB7K-qmaECLfjAVCaG1Dv9O_t8QZZQ6ZFdUrRAIXjefYkzvNSp0V9AGiNfEwmZglPLB0TtgndDtuv5WWUba0IAat9I60oQ1h8v5MdYBfPn',
    badge: 'FOR SALE'
  },
  {
    id: 'prop-4',
    title: 'Modern Kitchen Space @ Bedok',
    type: 'Central Kitchen',
    transaction: 'For Lease',
    price: 12000,
    priceFormatted: 'Lease: $4.20 psf',
    power: 150,
    powerFormatted: '150A',
    ceiling: '6.0m',
    region: 'Bedok',
    sfaApproved: true,
    loadingBay: false,
    tags: ['READY TO MOVE', 'GREASE TRAP'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGzs9eUlgscCG--Pwb_Yszu1jDfmsTIYI6Kf7wiQZYKlb5HzOjzsczDgWHCMTtlAOaUQISID3ZBa1RDDhtO_m7fhIcPkK6u_m5CZHYWDThgrsVAANG34rTVpQwn10hScKiaQPM3WdFaUcV1CSFHIbLSnZO_HQ-3hw0Ic6tkSUalJYsbGhDQRgAkhFu1vDMu0CXhoZCaZCuDnnlS9b-lwTdMdpsR-ZV6sfc2u-tTvAhr33gwLepJwXpR_2gXNOmG7jfo7oThCGVJsY4',
    badge: 'FOR LEASE'
  },
  {
    id: 'prop-5',
    title: 'Large Scale Processing @ Jurong',
    type: 'Food Factory',
    transaction: 'For Sale',
    price: 8800000,
    priceFormatted: '$8,800,000',
    power: 500,
    powerFormatted: '500A Heavy',
    region: 'Jurong',
    sfaApproved: true,
    loadingBay: true,
    tags: ['HEAVY POWER', 'LOADING BAYS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkF_SNPVsS86Tq6EV070HIocOrTdKKVUCJZwgGgZXt4FHW-l8GMOrKugLbu9gSn-vjZFfS34GEhoKQT-kyIjYy02BEvohhoiljpGVpC1ZJvqdfHikwnJwfbUuknj2KqNV6MDYb5wLH4NoKUiNa-GbBPhJVGYJSfnlb-ZWFP92tob3XULk_h9QEV_e1bNhGMw5APQFB02j-ojH92qTI2Dv_cwUV28oxOTAaKoBvvCdZSuG8Y1mpUbl-wVJcr106jzqnCzzp7ADyqev3',
    badge: 'FOR SALE'
  },
  {
    id: 'prop-6',
    title: 'High-Spec Food Hub @ Woodlands',
    type: 'Food Factory',
    transaction: 'For Sale',
    price: 3100000,
    priceFormatted: '$3,100,000',
    power: 200,
    powerFormatted: '200A',
    region: 'Woodlands',
    sfaApproved: true,
    loadingBay: true,
    tags: ['SFA APPROVED', 'ISO COMPLIANT'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX0sbCBRe5ue6RzUTs_1zoRKJM8lV7cyzB7gZXt4FHW-l8GMOrKugLbu9gSn-vjZFfS34GEhoKQT-kyIjYy02BEvohhoiljpGVpC1ZJvqdfHikwnJwfbUuknj2KqNV6MDYb5wLH4NoKUiNa-GbBPhJVGYJSfnlb-ZWFP92tob3XULk_h9QEV_e1bNhGMw5APQFB02j-ojH92qTI2Dv_cwUV28oxOTAaKoBvvCdZSuG8Y1mpUbl-wVJcr106jzqnCzzp7ADyqev3',
    badge: 'FOR SALE'
  },
  {
    id: 'prop-7',
    title: 'Cloud Kitchen Cluster @ Geylang',
    type: 'Central Kitchen',
    transaction: 'For Lease',
    price: 8000,
    priceFormatted: 'Lease: $5.80 psf',
    power: 100,
    powerFormatted: '100A',
    region: 'Geylang',
    sfaApproved: true,
    loadingBay: false,
    tags: ['CENTRAL LOCATION', 'F&B READY'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzUO7RY8sF1Ks3Mjs2oc8tbH7GyDXPW7jPPFvvswfYWi2c4j0qHKi2fhjxwswNLkDj8ubLUAP4fVha7zyMuKxGj1WZYULxaVMmMIWCuu97pMq6px1cRfonVuE0vUCfXSrwOlkhIPjLUtJeS2NfUFlScEb3zMtbZ4mBmHKB7K-qmaECLfjAVCaG1Dv9O_t8QZZQ6ZFdUrRAIXjefYkzvNSp0V9AGiNfEwmZglPLB0TtgndDtuv5WWUba0IAat9I60oQ1h8v5MdYBfPn',
    badge: 'FOR LEASE'
  },
  {
    id: 'prop-8',
    title: 'B1 Food Unit @ Tai Seng',
    type: 'Food Factory',
    transaction: 'For Sale',
    price: 1950000,
    priceFormatted: '$1,950,000',
    power: 150,
    powerFormatted: '150A',
    region: 'Tai Seng',
    sfaApproved: false,
    loadingBay: true,
    tags: ['STRATA TITLE', 'HIGH LOADING'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGzs9eUlgscCG--Pwb_Yszu1jDfmsTIYI6Kf7wiQZYKlb5HzOjzsczDgWHCMTtlAOaUQISID3ZBa1RDDhtO_m7fhIcPkK6u_m5CZHYWDThgrsVAANG34rTVpQwn10hScKiaQPM3WdFaUcV1CSFHIbLSnZO_HQ-3hw0Ic6tkSUalJYsbGhDQRgAkhFu1vDMu0CXhoZCaZCuDnnlS9b-lwTdMdpsR-ZV6sfc2u-tTvAhr33gwLepJwXpR_2gXNOmG7jfo7oThCGVJsY4',
    badge: 'SOLE AGENT'
  },
  // Extra Portfolio Items
  {
    id: 'portfolio-1',
    title: 'SFA-Approved Central Kitchen in Tuas South',
    type: 'Central Kitchen',
    transaction: 'For Sale',
    price: 2650000,
    priceFormatted: '$2,650,000',
    power: 200,
    powerFormatted: '200A 3-Phase',
    loading: '15kN/sqm',
    region: 'Tuas South',
    sfaApproved: true,
    loadingBay: true,
    tags: ['FOR SALE', 'SFA APPROVED'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMPs2h8Y_H0chSaafguQxL11ZX-8uMUf2gwqdgQsdCGme9SdyI9SNcvT1lwZeY6po7tUpoarj1g7K2wpBhzU8kg4dS9D0ZC0RxKZCNe1x4b5Uckd1T2p41IAgNHuQzzKna8b2qAWUL_QEvwk-5dMC1g-Z8zbq6gc3YdEWHCd7-Fju1ZdFIrktjfdVzva7ynXm9b01FyfzbV7OinXWGz-UzAU-RZvFLNg9XiVJnfTL-30gP59h25Z1S27d-8mETIuXdX7Y5spX-T5IM',
    badge: 'FOR SALE'
  },
  {
    id: 'portfolio-2',
    title: 'Brand New Food Factory @ Mandai Estate',
    type: 'Food Factory',
    transaction: 'For Lease',
    price: 13500,
    priceFormatted: 'Lease: $3.20 psf',
    power: 150,
    powerFormatted: '150A',
    ceiling: '7.0m',
    region: 'Mandai',
    sfaApproved: true,
    loadingBay: true,
    tags: ['FOR LEASE', 'BRAND NEW'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATW0_YHaSj08AYkCxIOz817HP1AaO9-aqDI0DJxm1cOXypGCjP7h0GcJoPMWvrJsVk1DeqvQFkaO5Oebj7hTzS6rVYB_7yKZTiHHLPZsakHHbwJh7cgkAqTuitfjD9tl0EmgkYab2Bj7ScGuHrSMmxvBA4YnHA5_phjsuSopQxnilnCCSs3oCxd8F_1QmN0n5RNLGQONFvxCTEcuykVAWhowPpYfEh1b-SmVLqjS9Xe-iUepoXQDO6sKI4MmZr4dOhLdwGvata7_I7',
    badge: 'FOR LEASE'
  },
  {
    id: 'portfolio-3',
    title: 'Chiller Room Ready Unit in Fishery Port',
    type: 'Cold Storage',
    transaction: 'For Lease',
    price: 18000,
    priceFormatted: 'Lease: $4.10 psf',
    power: 100,
    powerFormatted: '100A',
    temp: '0-4°C',
    region: 'Fishery Port',
    sfaApproved: true,
    loadingBay: true,
    tags: ['COLD STORAGE', 'READY TO MOVE'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIUML5UsmrJ7vR-hCRAY6XWJ5jDODm1GHx0BiWaCIBNNnKYucwXeG5tlIW0pcKUIhUH2mda0kQyFFSLgtsxriNBoz_yttB09SX1E7KaRqKjcfYHv56M8cKaGgDKQPJzIvzMfXjiOhUmGaRP9HZjVK5nJ7GHmXVjIo7TzvGDLXh8QY74PzUuD-EAouAUl7zqLJ_Q_faA9UJIHkqTlp-MPza3a_wm6QoAQU_fXc54WMluj9so5N_5aJFrhj1v8l2EOuTi7YeiuVLRGTa',
    badge: 'FOR LEASE'
  },
  {
    id: 'portfolio-4',
    title: 'Strategic Food Hub @ Chin Bee Area',
    type: 'Food Factory',
    transaction: 'For Sale',
    price: 6500000,
    priceFormatted: '$6,500,000',
    power: 400,
    powerFormatted: '400A',
    ceiling: '6.5m',
    region: 'Chin Bee',
    sfaApproved: true,
    loadingBay: true,
    tags: ['OFF-MARKET', 'PREMIUM LOCATION'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqv1y1aiL41H9CraeWtNzcwpq5C86nUbBjj7NfSDmlXTOBHFQ2xZ-iPuHo3a4JWiSQKCCy3lNihJKKpNZHHfY7lATOessIaSBnL5zNgxjAKSIBrT5UKiL1cGFbwxgWy22v8HWq6aTcGim-ygeKbrxy5ZX80bhO3FdOZjeOqYAA-bd69HfV_Mo925_JE1UvWhgj7pz_JSrmmRMFpxW0LSqkXPew9Rpb6_3k0Cywcj-jgGkMF0jFuKdPQk6Bb_eKM0O-6FBSakflCZRv',
    badge: 'OFF-MARKET'
  },
  {
    id: 'portfolio-5',
    title: 'Fully Fitted SFA Kitchen in Bedok Food City',
    type: 'Central Kitchen',
    transaction: 'For Sale',
    price: 1850000,
    priceFormatted: '$1,850,000',
    power: 150,
    powerFormatted: '150A',
    loading: 'Fitted',
    region: 'Bedok',
    sfaApproved: true,
    loadingBay: false,
    tags: ['SOLE AGENT', 'FULLY FITTED'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYoJNCb59-AHYxEeCxobic9AIsQSZr5wk5zfkZfToDmSD75Qmzk4aiZl3AScsdIuml4pzRcsAAt2v_gEl6W1GhJ3YeyKanqiXnXYW211iQNvicDYB6_Kini8a2DReAI63f3M29IKZPqXPTyas3EvfuUb2c6VwTmqtVfHz1DEHeAt6HmobF5z79UB5ujE8WGvLxKOho3O-aD8bGrShA-Du_um-Gts5UFLgy5QpQ-mNh0JNcKb2rDypfRqp183gF6qJBeqnvFTZ0nEtZ',
    badge: 'SOLE AGENT'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'guide-1',
    title: 'Complete Guide to SFA Food-Grade Compliance 2024',
    summary: 'Navigating the updated Singapore Food Agency (SFA) framework requires technical precision. From drainage slope requirements to high-care zone segregation, we break down everything industrial tenants need for approval.',
    category: 'Regulation Updates',
    tag: 'REGULATORY',
    readTime: '12 MIN READ',
    date: 'May 15, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjtlyaUkyaFSnHUDOYXUxnRC4hjywxHkJUrUO5e9g9u2TJGWMargSp3Nkjswbq5EE-cAcJ4juV1x44Y9yOXRswxRpI6GiizfO895Pqdf2X0Vg4sCk4gZNTg50cATEvtI871Z8if7caNIDoXLUlAMcBCJs0kMk-fQN8ExWQ7gLsVcaviM5PSSS5xb_aQ2kXiV4voYXkauB5SOMJ2gfZW1aiPXxTPgH8mn5WkG_HhFzxeVoDAoPwPjZlM2y6d8re1Y8IItq9c9h3crL',
    featured: true,
    content: `Singapore's food manufacturing industry operates under a world-class regulatory regime overseen by the Singapore Food Agency (SFA). SFA approvals are highly detail-oriented, focusing on sanitation, safety, traffic flow, and structural design.

### Key Structural Requirements for SFA Approval:

1. **Traffic Segregation (Clean vs. Raw Zones):**
   A compliant design must guarantee zero cross-contamination. This means establishing a unidirectional personnel and material flow. Raw materials must enter a separate receiving bay and transit into staging, processing, packaging, and dispatch in a linear direction.

2. **Drainage and Floor Slopes:**
   Open gratings are highly restricted in high-risk zones. All primary floor drains must be equipped with removable mesh traps, grease separation, and must slope towards discharge points at a minimum grade of 1:100.

3. **Coving and Hygienic Wall Finishes:**
   A standard square wall-to-floor joint is a hotbed for bacteria accumulation. SFA requires epoxy coving at all floor-to-wall intersections at a minimum radius of 50mm. Walls must be clad with smooth, light-colored, non-porous materials like PVC panels or high-grade food epoxy paint up to ceiling height.

4. **Grease Interceptors and Grease Traps:**
   Mandatory for central kitchens or facilities with oily cooking discharges. These traps must be sized according to peak cooking load calculations and be easily accessible for routine mechanical cleaning without posing any aerosol threat to processing zones.`
  },
  {
    id: 'insight-1',
    title: 'Cold Chain Logistics Growth in Singapore',
    summary: 'Rising demand for fresh-food delivery and pharmaceutical storage is driving a surge in specialized ramp-up cold storage facilities.',
    category: 'Technical Specs',
    tag: 'TECHNICAL',
    readTime: '8 MIN READ',
    date: 'Apr 28, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1bWge2Ffm6E98S7KGrAGsRppnZYOtKv5eqMx3tGTvUk0H5iTCM-DzeT-Qbo6totscvpRw7rmUUeePqlAmF41-O9gs5o_oanJsnFyzvMuNw7taGslUi6D8AsxTjFLLotG-mZ92fqQmGsJ4MvmbYAsudSvCK-0hiaGKFiLHL_oejabJDp5Cb5VyaTJT8ELMgVXVasPMyjQkjPp6QgsE_SsGb1Zdqx54006NIURWHdZb9HGDWEc-iqhUILd7hPml9mdKERJPqHteIBmg',
    content: `Singapore is solidifying its position as a high-value regional distribution point. The growth is fueled by automated multi-temperature chambers, highly flexible cold logistics systems, and stringent vaccine cold chains.

### Key Technical Aspects of Modern Cold Room Design:

1. **Precision Temperature Controls:**
   Dual-temperature capability (switching between chiller and freezer modes, e.g., -20°C to +4°C) is highly sought-after. It optimizes seasonal asset utilization.

2. **High Electrical Inbound Power:**
   Running continuous large compressors requires substantial power margins. Facilities must secure dedicated sub-station allocations, with minimum redundancy generators starting automatically within 15 seconds of utility failure.

3. **Inbound Air-Locks:**
   Loading docks must feature insulated dock shelters with inflatable bags sealable against 40ft container frames, preventing moisture ingress and ambient thermal loss.`
  },
  {
    id: 'insight-2',
    title: 'NEA Requirements for Central Kitchens',
    summary: 'Essential licensing requirements for operators planning to scale through centralized production, including waste management and pest control mandates.',
    category: 'Regulation Updates',
    tag: 'REGULATORY',
    readTime: '6 MIN READ',
    date: 'May 3, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbHL2Afvjv_p6n8u4KCSh7GZaEMQPR4XFNNgWXE04MsYgFKzLygNkSPHfbdqJ3s0bI3mf87Cuv9ktum3BZ3MC87d2YO4T-kSG4__92kFJJ2wQ1vUMQECvK1WY0HU3pn4YLF2c7ADpYH4LvSLUnztpQAjMYb0VQSUTtdkWCdJP5DTGvZa_f2v1coyWYVuPWo2is2Ivnbxn9NEI7hjAA2rZZXZ5u4ccbkoq6BMCm77sZYExpJRx8qw4fwcyCMpBGplrk3kh5c84U_Y3N',
    content: `Central kitchens are regulated strictly under the joint jurisdiction of NEA and SFA. Licensing centers on hygiene practices, massive mechanical ventilation, and dedicated waste/pest plans.

### Critical NEA Checkpoints:

1. **Exhaust and Air Scrubbing:**
   Odor control systems must use high-efficiency electronic precipitators (ESP) combined with activated carbon filter banks before discharge. Discharge outlets must point upwards and sit at least 3 meters above any neighboring roof level.

2. **Mechanical Ventilation Systems:**
   Air change calculations must provide at least 20 air changes per hour for hot cooking zones. Makeup air must be filtered to keep positive-pressure in prep zones and negative-pressure in warewashing.`
  },
  {
    id: 'insight-3',
    title: 'Maximizing Food Factory Asset Performance',
    summary: 'A case study on how strategic retrofitting improved SFA compliance scores and increased rental yield for a Tuas-based industrial asset.',
    category: 'Case Studies',
    tag: 'MARKET',
    readTime: '10 MIN READ',
    date: 'Mar 12, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3tHwtSaZNQfKKQ9bgyoOMucTviStDRkj1Cr_snahm8qMdHxMivjbK4N7vf4hfaIxsu7lYAUeYLqCE6CdyJvIS21nr8vvXJDAE7QgzJSXORtQ_vwWKkJ-eTE-RIwQbIRVgPzbbM_OkvuWe_HcKFRykt6xW6CIuwSkMkIwW4YQNW-bgKMg1OeVsu9XurNSG02utGqQCwWY1rSKCVxCab_-3HVpcsIna_0DxxOa2cTst5YLTsL1kaEnWWSyP2w6p7RYOp3weGSGnBRFX',
    content: `This case study examines a 15,000 sqft B2 industrial unit in Tuas South experiencing stagnation due to aging specifications.

### The Challenge:
- Power supply was limited to 100A, unable to power industrial steam retorts.
- Floor-load capacity was restricted to 10kN/sqm.
- Layout failed current SFA sanitary segregation rules.

### The Retrofit Solution:
- Upgraded electrical sub-board directly connected to grid substation, raising supply limits to 400A.
- Reinforcing structural columns and under-slabs with carbon-fiber reinforced polymers (CFRP), securing an upgraded loading rating of 22kN/sqm.
- Remodeled the sanitary layout into standard linear zones, installing a modern double-epoxy floor lining.

### The Result:
- Property was immediately tenanted to a commercial health-food brand.
- Rental yield rose from 3.8% to 6.2% post-retrofit.
- Entire SFA clearance took only 14 business days, record low.`
  },
  {
    id: 'insight-4',
    title: 'Cold Room Demand Surge',
    summary: "Why automated cold storage is becoming the gold standard for Singapore's food distribution hubs.",
    category: 'Market Trends',
    tag: 'TRENDS',
    readTime: '7 MIN READ',
    date: 'Apr 12, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzUO7RY8sF1Ks3Mjs2oc8tbH7GyDXPW7jPPFvvswfYWi2c4j0qHKi2fhjxwswNLkDj8ubLUAP4fVha7zyMuKxGj1WZYULxaVMmMIWCuu97pMq6px1cRfonVuE0vUCfXSrwOlkhIPjLUtJeS2NfUFlScEb3zMtbZ4mBmHKB7K-qmaECLfjAVCaG1Dv9O_t8QZZQ6ZFdUrRAIXjefYkzvNSp0V9AGiNfEwmZglPLB0TtgndDtuv5WWUba0IAat9I60oQ1h8v5MdYBfPn',
    content: `Automation in cold rooms is transforming how cold chains handle velocity, storage density, and thermal integrity. Automated Storage and Retrieval Systems (ASRS) maximize space efficiency and minimize labor overheads in freezing environments.

### The Efficiency Edge of ASRS:
The core advantage is minimizing the footprint that requires active chilling. By utilizing high-density vertical racking up to 40 meters, companies cut thermal leakage surface areas in half, reducing refrigeration power consumption up to 35%.`
  },
  {
    id: 'insight-5',
    title: 'Optimizing Floor Loading',
    summary: 'Technical specifications for heavy machinery installation in food processing factory units.',
    category: 'Technical Specs',
    tag: 'TECHNICAL',
    readTime: '9 MIN READ',
    date: 'Mar 20, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGzs9eUlgscCG--Pwb_Yszu1jDfmsTIYI6Kf7wiQZYKlb5HzOjzsczDgWHCMTtlAOaUQISID3ZBa1RDDhtO_m7fhIcPkK6u_m5CZHYWDThgrsVAANG34rTVpQwn10hScKiaQPM3WdFaUcV1CSFHIbLSnZO_HQ-3hw0Ic6tkSUalJYsbGhDQRgAkhFu1vDMu0CXhoZCaZCuDnnlS9b-lwTdMdpsR-ZV6sfc2u-tTvAhr33gwLepJwXpR_2gXNOmG7jfo7oThCGVJsY4',
    content: `Food processing involves heavy vessels, water pasteurizers, retorts, and massive cooking lines. Standard multi-story B1 warehouse limits are typically inadequate.

### Floor Loading Benchmarks:
- Central kitchen: Minimum 12.5 kN/sqm
- Beverage bottling/Heavy packaging lines: Minimum 20 kN/sqm
- Automated dry stores: Up to 30 kN/sqm
Consult structural engineers early to determine if steel-plate distribution rafts are required under stationary boilers.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Preston's deep understanding of SFA regulations saved our project months of delays. He is the only person we trust for food-grade facilities.",
    author: "MANUFACTURING DIRECTOR",
    role: "Food & Beverage Logistics Corporation"
  },
  {
    id: 'test-2',
    quote: "Preston found us a cold-room facility that exceeded our power requirements within 48 hours. A true specialist.",
    author: "LOGISTICS HEAD",
    role: "Cold Chain Supply Singapore"
  },
  {
    id: 'test-3',
    quote: "Navigating NEA licensing for our central kitchen was seamless with Preston's guidance. Highly recommended for any food business.",
    author: "F&B FOUNDER",
    role: "Gourmet Group Holdings"
  },
  {
    id: 'test-4',
    quote: "The most knowledgeable agent in the food-grade space. His technical insights on floor loading were critical for our heavy machinery.",
    author: "OPERATIONS MANAGER",
    role: "Industrial Canning Ltd"
  },
  {
    id: 'test-5',
    quote: "As a BNI partner, I've referred multiple clients to Preston. His professionalism and niche expertise are unmatched in Singapore.",
    author: "COMMERCIAL INTERIOR DESIGNER",
    role: "BuildCorp Design Group"
  }
];
