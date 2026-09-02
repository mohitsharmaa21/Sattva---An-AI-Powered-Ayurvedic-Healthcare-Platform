/**
 * Sattva Verified Ayurvedic Remedies Knowledge Base
 * Academic & Evidence-Aware Dataset with Source Verification (Tier 1 & Tier 2)
 * Prepared for College Minor Project & future RAG/LLM Personalization Engine
 */

export const REMEDIES = [
  {
    "id": "ashwagandha-extract",
    "name": "Ashwagandha Extract",
    "commonName": "Indian Ginseng / Winter Cherry",
    "botanicalName": "Withania somnifera (L.) Dunal",
    "partUsed": "Root",
    "formulationType": "Standardized Root Extract (Capsule / Powder)",
    "categoryTags": [
      "stress",
      "sleep",
      "energy"
    ],
    "shortDescription": "Traditional Rasayana investigated for perceived stress and sleep latency support.",
    "whatItIs": "Ashwagandha is a renowned adaptogenic shrub in Ayurveda, traditionally revered as a Balya (strength-promoting) and Rasayana (rejuvenative) herb.",
    "traditionalUses": [
      "Classified as a Balya (vitalizer) and Medhya Rasayana (cognitive rejuvenator) in Charaka Samhita.",
      "Historically used to balance aggravated Vata and Kapha doshas related to physical exhaustion and nervous fatigue.",
      "Traditional Anupana includes warm milk, honey, or ghee taken at bedtime."
    ],
    "potentialWellnessSupport": [
      "May support physiological resilience against acute and chronic daily stress.",
      "Investigated in human clinical trials for improving sleep latency and restorative sleep quality.",
      "Studied for assisting healthy cortisol balance and perceived physical endurance."
    ],
    "scientificEvidenceSummary": "Multiple randomized, double-blind, placebo-controlled human clinical trials suggest that standardized root extracts (e.g., KSM-66, Sensoril) may significantly reduce self-reported stress scales (PSS) and serum cortisol levels over 60-90 days. While findings are promising, optimal standardized dosages vary and it should not be represented as a treatment for clinical psychiatric disorders.",
    "keyConstituents": "Withanolides (Withaferin A, Withanolide A, Withanosides), Alkaloids (Withanine, Somniferine), and Sitoindosides.",
    "safetyPrecautions": "Generally well-tolerated at studied dosages. May possess mild sedative and thyroid-modulating actions. Discontinue at least 2 weeks before scheduled surgery due to central nervous system interaction.",
    "whoShouldAvoid": "Pregnant individuals (traditional abortifacient concern), individuals with hyperthyroidism, active autoimmune conditions (unless supervised), or those on concurrent immunosuppressant / sedative medications.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Commonly studied clinical dosage: 300–600 mg daily of standardized extract, or 3–6 g of root churna. Dosage depends on formulation; consult an Ayurvedic practitioner.",
    "sources": [
      {
        "title": "e-Charak National Medicinal Plants Board (Ministry of AYUSH)",
        "url": "https://echarak.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH, Govt of India"
      },
      {
        "title": "Systematic Review of Withania somnifera in Stress & Anxiety (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34254920/",
        "type": "Peer-reviewed Journal",
        "publisher": "Current Neuropharmacology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "triphala-churna",
    "name": "Triphala Churna",
    "commonName": "Three Fruits Formulation",
    "botanicalName": "Emblica officinalis, Terminalia bellirica, Terminalia chebula (1:1:1)",
    "partUsed": "Dried Fruit Pericarps (Amalaki, Bibhitaki, Haritaki)",
    "formulationType": "Classical Polyherbal Churna (Fine Powder)",
    "categoryTags": [
      "digestion",
      "general_wellness"
    ],
    "shortDescription": "Classical three-fruit blend supporting gentle bowel motility and gastrointestinal comfort.",
    "whatItIs": "Triphala is one of the foundational polyherbal formulations in classical Ayurveda, compounding equal parts of three myrobalan fruits to support balanced Tridosha.",
    "traditionalUses": [
      "Documented in Sushruta Samhita as a Deepana (digestive stimulant), Anulomana (gentle bowel regulator), and Chakshushya (eye wellness).",
      "Balances all three doshas (Vata, Pitta, Kapha) with predominant Kashaya (astringent) and Madhura (sweet) post-digestive taste.",
      "Traditionally taken with lukewarm water before bedtime."
    ],
    "potentialWellnessSupport": [
      "Supports regular intestinal transit time and stool consistency without aggressive cathartic irritation.",
      "Provides high polyphenol and vitamin C antioxidant defense for mucosal lining integrity.",
      "Supports healthy gut microbiome diversity in preclinical investigations."
    ],
    "scientificEvidenceSummary": "Human clinical evaluations and pharmacological reviews indicate that Triphala improves symptoms of functional constipation and gastrointestinal discomfort. The combination exhibits synergistic antioxidant and prebiotic properties. It supports digestive wellness rather than functioning as a commercial \"body detoxifier\".",
    "keyConstituents": "Gallic acid, Ellagic acid, Chebulinic acid, Chebulagic acid, Corilagin, Ascorbic acid (Vitamin C), and Tannins.",
    "safetyPrecautions": "Higher doses can cause loose stools, abdominal cramping, or dehydration due to its mild laxative action. Maintain adequate hydration during use.",
    "whoShouldAvoid": "Individuals experiencing acute diarrhea, dysentery, severe dehydration, or pregnancy (due to downward vata/uterine contraction concerns).",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Traditional dosage: 3–6 g powder with warm water at bedtime. Formulations vary across commercial preparations.",
    "sources": [
      {
        "title": "Ayurvedic Pharmacopoeia of India (API) Monograph on Triphala",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Pharmacopoeial Commission for Indian Medicine"
      },
      {
        "title": "Clinical Evaluation of Triphala in Gastrointestinal Motility (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28696777/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Alternative and Complementary Medicine"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "brahmi-vati",
    "name": "Brahmi Vati",
    "commonName": "Bacopa Compound Tablet",
    "botanicalName": "Bacopa monnieri (L.) Wettst. / Centella asiatica composite formulation",
    "partUsed": "Whole Plant / Aerial Herb compound",
    "formulationType": "Classical Ayurvedic Tablet (Vati)",
    "categoryTags": [
      "cognition",
      "focus",
      "stress"
    ],
    "shortDescription": "Classical Medhya formulation studied for mental clarity, attention span, and working memory support.",
    "whatItIs": "Brahmi Vati is a time-tested classical formulation containing Medhya (intellect-promoting) herbs triturated with herbal decoctions into compressed pills.",
    "traditionalUses": [
      "Prescribed in classical texts as a Medhya Rasayana to enhance Dhi (acquisition), Dhriti (retention), and Smriti (recall).",
      "Calms aggravated Pitta and Vata in the Manovaha Srotas (mental channels).",
      "Traditionally administered with Ghee, honey, or Saraswatarishta."
    ],
    "potentialWellnessSupport": [
      "May support working memory consolidation and information processing speed.",
      "Studied for aiding calm mental focus during demanding cognitive tasks.",
      "Helps modulate chronic stress-induced mental fatigue."
    ],
    "scientificEvidenceSummary": "Systematic reviews and meta-analyses of standardized Bacopa monnieri extracts (e.g., CDRI 08 / Bacopin) show statistically significant improvements in speed of information processing and verbal learning recall over 8 to 12 weeks in human trials. Classical multi-herb Brahmi Vati tablets have observational support, though precise trial data reflects the primary constituent Bacopa.",
    "keyConstituents": "Bacosides A & B, Bacopasaponins, Betulinic acid, Brahmine, and Flavonoids (Luteolin, Apigenin).",
    "safetyPrecautions": "May cause gastrointestinal upset, mild nausea, or increased bowel movements when taken on an empty stomach. Best consumed with or after meals.",
    "whoShouldAvoid": "Individuals with bradycardia, urinary tract obstruction, active peptic ulcer disease, or thyroid imbalances without physician consultation.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Classical dosage: 250–500 mg (1-2 tablets) once or twice daily after food with water or milk.",
    "sources": [
      {
        "title": "Central Council for Research in Ayurvedic Sciences (CCRAS) - Medhya Rasayana",
        "url": "http://ccras.nic.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH, Govt of India"
      },
      {
        "title": "Meta-analysis of Bacopa monnieri on Cognitive Performance (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24481962/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Ethnopharmacology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "turmeric-taila",
    "name": "Turmeric Taila",
    "commonName": "Curcuma Medicated Oil",
    "botanicalName": "Curcuma longa L. infused in Sesamum indicum seed oil",
    "partUsed": "Rhizome and Essential Oil",
    "formulationType": "Classical Medicated Oil (Taila) for Topical / External Use",
    "categoryTags": [
      "skin",
      "general_wellness"
    ],
    "shortDescription": "Medicated herbal oil traditionally massaged for localized muscular comfort and skin barrier soothing.",
    "whatItIs": "Turmeric Taila is an authentic Ayurvedic lipid preparation where lipophilic turmeric fractions and essential oils are slowly decocted into a cured sesame oil base for topical application.",
    "traditionalUses": [
      "Used as an Abhyanga (external massage) oil for Shothahara (local swelling moderation) and Varnya (complexion evening).",
      "Pacifies localized Vata and Kapha blockages in joints and muscular tissues.",
      "Applied externally over stressed joints or minor dermal dryness."
    ],
    "potentialWellnessSupport": [
      "Supports localized skin barrier hydration and topical antioxidant protection.",
      "Aids in soothing physical joint stiffness and fatigue through regular massage.",
      "Helps maintain dermal elasticity and natural skin resilience."
    ],
    "scientificEvidenceSummary": "While oral curcumin has extensive clinical data, topical turmeric oil research focuses on dermatological barrier repair, sebum modulation, and dermal antioxidant capacity. Clinical trials on pure topical turmeric oils show good tolerability and skin hydration benefits, though systemic anti-inflammatory claims should not be conflated with oral formulations.",
    "keyConstituents": "Ar-turmerone, alpha-turmerone, beta-turmerone, Curcuminoids (lipid-soluble traces), and Sesquiterpenes.",
    "safetyPrecautions": "Strictly for external application. May cause temporary yellow skin tinting and fabric staining. Conduct a patch test before widespread application.",
    "whoShouldAvoid": "Individuals with active open wounds, weeping eczema, acute dermatitis, or known contact allergies to turmeric or sesame oil.",
    "evidenceLevel": "C",
    "evidenceLevelLabel": "Classical / Preliminary Evidence",
    "dosageGuidance": "External use: Warm gently and apply locally with gentle circular massage. Leave on for 30 minutes before washing with warm water.",
    "sources": [
      {
        "title": "Pharmacopoeial Laboratory for Indian Medicine (PLIM) - Taila Standards",
        "url": "http://plim.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Study on Topical Curcuma longa Formulations & Skin Hydration (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21824054/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Cosmetic Dermatology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "shatavari-root",
    "name": "Shatavari Root",
    "commonName": "Wild Asparagus",
    "botanicalName": "Asparagus racemosus Willd.",
    "partUsed": "Tuberous Root",
    "formulationType": "Root Powder (Churna) / Standardized Extract",
    "categoryTags": [
      "women_wellness",
      "immunity",
      "energy"
    ],
    "shortDescription": "Traditional female Rasayana investigated for adaptogenic support and reproductive vitality.",
    "whatItIs": "Shatavari (meaning \"she who possesses a hundred husbands\") is the premier Ayurvedic rejuvenative herb for Pitta pacification and female physiological support.",
    "traditionalUses": [
      "Documented as Stanyajanana (galactagogue), Shukra Janana (vital essence promoting), and Rasayana.",
      "Cooling (Sheeta veerya) and nourishing (Madhura vipaka) nature, specifically pacifying high Pitta and dry Vata.",
      "Traditionally taken boiled with milk and natural cane sugar."
    ],
    "potentialWellnessSupport": [
      "Supports nutritional and hormonal transition wellness across natural life phases.",
      "Investigated for supporting mucosal immunity and digestive tract hydration.",
      "Studied for assisting post-partum vitality and lactation parameters."
    ],
    "scientificEvidenceSummary": "Clinical studies investigating Asparagus racemosus have shown measurable benefits in prolactin response for lactation support and reduction of subjective menopausal discomfort scores (hot flashes, fatigue). While biologically active steroidal saponins provide adaptogenic support, it is not an estrogen replacement therapy and does not \"cure hormonal disease\".",
    "keyConstituents": "Steroidal saponins (Shatavarins I–IV), Isoflavones, Sarsasapogenin, Racemosides, and Mucilage.",
    "safetyPrecautions": "May have mild phytoestrogenic activity and diuretic properties. Use under medical advice if managing estrogen-sensitive health conditions.",
    "whoShouldAvoid": "Individuals with estrogen-receptor positive conditions, kidney dysfunction (diuretic load), or known allergies to members of the Asparagaceae family.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Traditional dosage: 3–6 g root churna daily with warm milk or water, or 250–500 mg standardized extract.",
    "sources": [
      {
        "title": "e-Charak Database - Asparagus racemosus Profile",
        "url": "https://echarak.in",
        "type": "Government / AYUSH",
        "publisher": "National Medicinal Plants Board"
      },
      {
        "title": "Review of Asparagus racemosus in Female Reproductive Health (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29635127/",
        "type": "Peer-reviewed Journal",
        "publisher": "Biomedicine & Pharmacotherapy"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "neem-tablets",
    "name": "Neem Tablets",
    "commonName": "Indian Lilac",
    "botanicalName": "Azadirachta indica A. Juss.",
    "partUsed": "Leaves and Bark",
    "formulationType": "Standardized Leaf Extract / Compressed Tablet",
    "categoryTags": [
      "skin",
      "immunity"
    ],
    "shortDescription": "Potent bitter herb traditionally used for skin balance and natural microbial defense.",
    "whatItIs": "Neem is celebrated in classical Ayurveda as \"Arishta\" (reliever of sickness), known for its intensely bitter (Tikta) and cooling (Sheeta) metabolic cleansing actions.",
    "traditionalUses": [
      "Classified as Kandughna (anti-pruritic), Kushthaghna (skin disorder pacifier), and Raktashodhaka.",
      "Strongly mitigates Pitta and Kapha morbidities manifesting in dermal layers.",
      "Traditional short-course seasonal remedy during spring (Ritu Sandhi)."
    ],
    "potentialWellnessSupport": [
      "Supports healthy skin microflora and resilience against occasional dermal breakouts.",
      "Demonstrates broad-spectrum in vitro antimicrobial and free-radical scavenging defense.",
      "Supports healthy periodontal and oral mucosal tissue balance."
    ],
    "scientificEvidenceSummary": "Pharmacological and small-scale human dermatological studies demonstrate that Azadirachta indica extract exhibits notable anti-inflammatory, antibacterial (against Cutibacterium acnes), and antioxidant activities. However, it should not be promoted as a general \"blood detoxifier\", and oral use should be strictly time-limited due to its potent bitter bioactives.",
    "keyConstituents": "Limonoids (Azadirachtin, Nimbin, Nimbidin, Salannin), Quercetin, beta-sitosterol, and Polyphenols.",
    "safetyPrecautions": "High doses or prolonged unmonitored use can cause hepatic and renal strain. Not recommended for continuous long-term daily consumption.",
    "whoShouldAvoid": "Pregnant and lactating women, infants/children, couples attempting conception (anti-fertility preclinical observations), and individuals with hypoglycemia or liver disorders.",
    "evidenceLevel": "C",
    "evidenceLevelLabel": "Classical / Preliminary Evidence",
    "dosageGuidance": "Traditional short-term dosage: 250–500 mg once daily with water after meals for 2–4 weeks max, unless directed otherwise by an Ayurvedic doctor.",
    "sources": [
      {
        "title": "CCRAS Monograph on Azadirachta indica Safety & Pharmacology",
        "url": "http://ccras.nic.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Biological Activities and Medicinal Properties of Neem (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15777222/",
        "type": "Peer-reviewed Journal",
        "publisher": "Current Science"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "tulsi-extract",
    "name": "Tulsi Extract",
    "commonName": "Holy Basil",
    "botanicalName": "Ocimum tenuiflorum L. (syn. Ocimum sanctum L.)",
    "partUsed": "Leaves and Aerial Parts",
    "formulationType": "Standardized Leaf Extract / Aqueous Infusion",
    "categoryTags": [
      "respiratory",
      "immunity",
      "stress"
    ],
    "shortDescription": "Revered adaptogen studied for upper respiratory comfort and daily environmental stress resilience.",
    "whatItIs": "Tulsi, known as \"The Incomparable One\", is a sacred Ayurvedic adaptogenic herb widely used for metabolic, respiratory, and psychological equilibrium.",
    "traditionalUses": [
      "Documented as Kaphaghna (Kapha reducer), Shvasahara (respiratory support), and Hridya (heart-gladdening).",
      "Features Ushna (warm) veerya and Katu-Tikta (pungent-bitter) rasa, assisting clear pranavaha srotas (airways).",
      "Consumed as fresh leaf infusion with black pepper and ginger or honey."
    ],
    "potentialWellnessSupport": [
      "Supports normal bronchial airflow and upper respiratory comfort during seasonal shifts.",
      "Investigated in clinical settings for reducing psychological stress and cognitive fatigue.",
      "Helps maintain healthy immune surveillance and cellular antioxidant capacity."
    ],
    "scientificEvidenceSummary": "A comprehensive systematic review of 24 human clinical studies published in evidence-based journals confirmed that Tulsi supplementation safely promotes adaptogenic effects, improves glycemic parameters, supports cognitive function, and relieves seasonal respiratory distress. It shows consistent safety across clinical trials, though preparation potencies vary.",
    "keyConstituents": "Eugenol, Ursolic acid, Rosmarinic acid, Carvacrol, Caryophyllene, and Apigenin.",
    "safetyPrecautions": "May have mild antiplatelet (blood thinning) actions and mild hypoglycemic effects. Monitor blood sugar if taking antidiabetic medication.",
    "whoShouldAvoid": "Individuals scheduled for surgery within 2 weeks, individuals on anticoagulant drugs (warfarin/heparin), or pregnant women (mild uterine-stimulating potential).",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Common clinical dosage: 300–600 mg standardized extract daily, or 2–3 cups of hot leaf infusion.",
    "sources": [
      {
        "title": "Ministry of AYUSH Guidance on Ocimum sanctum in Health",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH, Govt of India"
      },
      {
        "title": "The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28400848/",
        "type": "Peer-reviewed Journal",
        "publisher": "Evidence-Based Complementary and Alternative Medicine"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "giloy-ghana-vati",
    "name": "Giloy / Guduchi Ghana Vati",
    "commonName": "Guduchi / Heart-Leaved Moonseed",
    "botanicalName": "Tinospora cordifolia (Willd.) Miers",
    "partUsed": "Stem",
    "formulationType": "Classical Solid Aqueous Extract Tablet (Ghana Vati)",
    "categoryTags": [
      "immunity",
      "general_wellness"
    ],
    "shortDescription": "Classical aqueous extract studied for immunomodulatory support and healthy thermoregulation.",
    "whatItIs": "Giloy (Guduchi), meaning \"that which protects the body from decay\", is an essential Rasayana climber whose aqueous stem extract is concentrated into dense Ghana tablets.",
    "traditionalUses": [
      "Revered as Amrita (nectar), Jvarahara (febrifuge), and Rasayana.",
      "Balances all three doshas with unique heating veerya combined with sweet post-digestive vipaka.",
      "Administered with honey, warm water, or Pippali for metabolic support."
    ],
    "potentialWellnessSupport": [
      "Supports phagocytic white blood cell activity and natural immune defense pathways.",
      "Aids in maintaining normal body temperature and recovery after viral episodes.",
      "Provides hepatoprotective antioxidant defense against physiological oxidative stress."
    ],
    "scientificEvidenceSummary": "Controlled human clinical trials and laboratory studies demonstrate that Tinospora cordifolia polysaccharides and alkaloids stimulate macrophage activation, enhance neutrophil activity, and moderate inflammatory cytokines. It supports immune response and post-illness recuperation, but should not be branded as an invincible \"immune booster\". Correct plant identification is critical.",
    "keyConstituents": "Tinosporoside, Cordifoliosides A-E, Berberine, Giloin, Tinocordiside, and Arabinogalactan polysaccharides.",
    "safetyPrecautions": "May lower blood glucose levels. Ensure genuine Tinospora cordifolia is sourced (preventing confusion with non-medicinal Tinospora crispa).",
    "whoShouldAvoid": "Patients with autoimmune disorders (due to immune stimulation), individuals taking prescription antidiabetic medications without monitoring, or pregnant women.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Classical dosage: 500–1000 mg (1-2 tablets of Ghana Vati) twice daily after food with warm water.",
    "sources": [
      {
        "title": "Ministry of AYUSH Advisory on Safe and Proper Use of Guduchi (Tinospora cordifolia)",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Immunomodulatory Role of Tinospora cordifolia in Human Studies (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22830857/",
        "type": "Peer-reviewed Journal",
        "publisher": "Indian Journal of Pharmacology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "guggul-lipid",
    "name": "Guggul Lipid",
    "commonName": "Indian Bdellium Tree Resin Extract",
    "botanicalName": "Commiphora wightii (Arn.) Bhandari (syn. Commiphora mukul)",
    "partUsed": "Purified Oleo-Gum-Resin",
    "formulationType": "Standardized Guggulipid Extract / Shuddha Guggulu Tablet",
    "categoryTags": [
      "metabolism",
      "cardiovascular"
    ],
    "shortDescription": "Purified gum-resin extract investigated for healthy lipid metabolism and joint comfort support.",
    "whatItIs": "Guggul is the purified resinous exudate of the Commiphora tree, processed through classical Shodhana (purification in Triphala decoction) to optimize bioactivity.",
    "traditionalUses": [
      "Documented in Charaka Samhita as Lekhaniya (scraping / anti-adipose) and Medohara (fat-reducing).",
      "Deeply penetrative (Teekshna/Sukshma) and hot (Ushna), targeting deep-seated Ama in joints and channels.",
      "Traditionally combined with Triphala or ginger water."
    ],
    "potentialWellnessSupport": [
      "May support healthy hepatic lipid clearance and normal cholesterol synthesis pathways.",
      "Assists in supporting normal connective tissue and joint flexibility.",
      "Supports healthy thyroid and metabolic turnover rate in preclinical studies."
    ],
    "scientificEvidenceSummary": "Standardized Guggulipid has been investigated in Indian clinical trials showing favorable modulation of total cholesterol and triglycerides. However, subsequent clinical studies in Western populations on typical Western diets yielded variable, mixed results. Thus, evidence is considered moderate/promising with dietary interdependence.",
    "keyConstituents": "Z-Guggulsterone, E-Guggulsterone, Guggulsterols, Mukulol, and Commiphoric acids.",
    "safetyPrecautions": "Can cause mild gastrointestinal irritation, skin rashes, or diarrhea in Pitta-predominant individuals. May stimulate thyroid hormone production.",
    "whoShouldAvoid": "Individuals taking thyroid medications, blood thinners, oral contraceptives (due to CYP3A4 interaction), pregnant women (uterine stimulant), and individuals with liver disease.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Standardized extract: 250–500 mg containing 25 mg guggulsterones twice daily with food.",
    "sources": [
      {
        "title": "Ayurvedic Pharmacopoeia of India (API) - Shuddha Guggulu",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Pharmacopoeial Commission for Indian Medicine"
      },
      {
        "title": "Evaluation of Commiphora mukul (Guggul) in Lipid Profiles (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12915431/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of the American Medical Association"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "arjuna-bark",
    "name": "Arjuna Bark",
    "commonName": "Arjun Tree Bark",
    "botanicalName": "Terminalia arjuna (Roxb. ex DC.) Wight & Arn.",
    "partUsed": "Stem Bark",
    "formulationType": "Bark Powder (Churna) / Classical Kshirapaka (Milk Decoction)",
    "categoryTags": [
      "cardiovascular",
      "energy"
    ],
    "shortDescription": "Traditional Hridya bark studied for cardiovascular tonification and endothelial function support.",
    "whatItIs": "Arjuna is the foremost cardioprotective tree bark in Ayurvedic medicine, utilized for over 1,500 years as a cardiac tonic and vascular strengthener.",
    "traditionalUses": [
      "Documented by Vagbhata in Ashtanga Hridaya as the quintessential Hridya (cardiac tonic) herb.",
      "Features Kashaya (astringent) rasa and Sheeta (cooling) veerya, pacifying Pitta and Kapha in Rakta Dhatu.",
      "Traditionally boiled in milk and water (Arjuna Kshirapaka) to extract both water-soluble and lipid-soluble actives."
    ],
    "potentialWellnessSupport": [
      "Assists in supporting left ventricular function and cardiac muscle endurance.",
      "Provides potent vascular antioxidant defense, protecting LDL particles from oxidation.",
      "Supports healthy blood pressure metrics within normal physiological limits."
    ],
    "scientificEvidenceSummary": "Multiple randomized clinical trials in patients with stable angina and post-infarction recovery show that Terminalia arjuna bark extract (500 mg thrice daily) improves left ventricular ejection fraction and exercise tolerance. It acts as an effective complementary vascular tonic but must never substitute for emergency cardiac pharmaceuticals.",
    "keyConstituents": "Arjunic acid, Arjunolic acid, Arjungenin, Arjunetin, Polyphenols, Tannins, and Flavonoids (Luteolin, Kaempferol).",
    "safetyPrecautions": "Generally safe when taken as directed. Do not adjust or discontinue prescribed cardiac medications without consulting a cardiologist.",
    "whoShouldAvoid": "Individuals with acute decompensated heart failure without emergency medical care, severe hypotension, or pregnant/lactating mothers.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Traditional dosage: 3–6 g bark powder boiled as Kshirapaka with milk, or 500 mg standardized extract 2-3 times daily.",
    "sources": [
      {
        "title": "CCRAS Monograph on Terminalia arjuna in Cardiovascular Wellness",
        "url": "http://ccras.nic.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Clinical Evaluation of Terminalia arjuna in Cardiovascular Parameters (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20805960/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Association of Physicians of India"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "shilajit-resin",
    "name": "Shilajit Resin",
    "commonName": "Mineral Pitch / Asphaltum",
    "botanicalName": "Asphaltum punjabianum (Purified Mineral-Organic Complex)",
    "partUsed": "Purified Mountain Exudate",
    "formulationType": "Purified Semi-solid Resin (Shodhita Shilajatu)",
    "categoryTags": [
      "energy",
      "general_wellness"
    ],
    "shortDescription": "Purified mineral-organic complex rich in fulvic acid, studied for cellular energy and physical vitality.",
    "whatItIs": "Shilajit is a natural mineral-organic exudate collected from high-altitude Himalayan rock fissures during hot summer months, subjected to classical Shodhana (purification) to eliminate heavy metals and debris.",
    "traditionalUses": [
      "Described in Charaka Samhita as a Sarvaroga Pranashini (all-disease overcoming) master Rasayana.",
      "Acts as a Yogavahi (catalytic bio-enhancer), carrying the properties of co-administered herbs deep into the Dhatus.",
      "Taken traditionally dissolved in lukewarm milk, ghee, or honey."
    ],
    "potentialWellnessSupport": [
      "Supports mitochondrial ATP cellular energy synthesis and physical endurance.",
      "Provides over 80 ionic trace minerals and fulvic acid for nutrient assimilation.",
      "Investigated in clinical trials for supporting healthy testosterone and spermatogenesis markers in men."
    ],
    "scientificEvidenceSummary": "Clinical trials on purified, standardized Shilajit (e.g., Primavie, 250-500 mg/day) demonstrated significant increases in total and free testosterone, maintenance of muscular strength during fatiguing exercise, and enhanced collagen synthesis over 90 days. Raw, unpurified Shilajit is unsafe due to heavy metal contaminants.",
    "keyConstituents": "Fulvic acid (40-60%), Humic acid, Dibenzo-alpha-pyrones (DBPs), DBP chromoproteins, and 84+ trace minerals.",
    "safetyPrecautions": "Strictly consume ONLY purified, lab-tested, heavy-metal certified Shilajit resin or standardized extract. Never consume raw rock exudate.",
    "whoShouldAvoid": "Individuals with active gout or elevated uric acid (may increase uric acid levels), hemochromatosis (high iron storage), sickle cell anemia, or pregnant women.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Purified resin: 250–500 mg (pea-sized portion) dissolved in warm water, milk, or green tea once daily in the morning.",
    "sources": [
      {
        "title": "Ministry of AYUSH Standards on Shodhita Shilajit Processing",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Clinical Evaluation of Purified Shilajit on Testosterone and Cellular Bioenergetics (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26395129/",
        "type": "Peer-reviewed Journal",
        "publisher": "Andrologia"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "bhringraj-taila",
    "name": "Bhringraj Taila",
    "commonName": "Eclipta Medicated Hair Oil",
    "botanicalName": "Eclipta prostrata (L.) L. (syn. Eclipta alba) infused in herbal oil base",
    "partUsed": "Whole Plant Juice and Leaves",
    "formulationType": "Classical Medicated Scalp Oil (Keshya Taila)",
    "categoryTags": [
      "hair",
      "skin"
    ],
    "shortDescription": "Classical medicated botanical oil traditionally massaged into scalp to nourish hair roots and follicles.",
    "whatItIs": "Bhringraj Taila is an authentic Ayurvedic hair formulation where fresh Bhringraj plant juice and cooling herbs (Manjistha, Padmaka, Lodhra) are slowly cooked in sesame or coconut oil base.",
    "traditionalUses": [
      "Celebrated as Keshya (hair promoter), Rasayana for hair and teeth, and Shiro-Roga pacifier.",
      "Cools excessive Pitta heat in the scalp that causes premature greying (Palitya) and hair thinning (Khalitya).",
      "Applied topically onto scalp vertices with gentle circular pressure (Shiroabhyanga)."
    ],
    "potentialWellnessSupport": [
      "Provides deep follicular conditioning and moisturization to dry, itchy scalp.",
      "Investigated in preclinical models for stimulating anagen (active growth) hair phase.",
      "Aids in mental relaxation and cooling tension when applied as bedtime head massage."
    ],
    "scientificEvidenceSummary": "Preclinical and comparative pharmacological studies confirm that Eclipta alba extract significantly accelerates hair follicle transition into the anagen growth phase compared to control groups. Evidence for human scalp nourishment is based on established classical use and observational dermatology studies for external application.",
    "keyConstituents": "Wedelolactone, Demethylwedelolactone, Ecliptine, beta-amyrin, Stigmasterol, and essential fatty acids.",
    "safetyPrecautions": "For external scalp and hair application only. Do not ingest. If scalp irritation occurs, wash off immediately.",
    "whoShouldAvoid": "Individuals with open scalp lesions, acute fungal ringworm infections requiring targeted antifungals, or sesame/seed oil contact allergies.",
    "evidenceLevel": "C",
    "evidenceLevelLabel": "Classical / Preclinical Evidence",
    "dosageGuidance": "External use: Apply 5–10 mL to scalp, massage gently for 10 minutes. Leave on for at least 1 hour or overnight before washing with mild cleanser.",
    "sources": [
      {
        "title": "e-Charak National Database - Eclipta prostrata",
        "url": "https://echarak.in",
        "type": "Government / AYUSH",
        "publisher": "National Medicinal Plants Board"
      },
      {
        "title": "Hair Growth Promoting Activity of Eclipta alba in Animal Models (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19481594/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Ethnopharmacology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "yashtimadhu-root",
    "name": "Yashtimadhu Root",
    "commonName": "Licorice / Mulethi",
    "botanicalName": "Glycyrrhiza glabra L.",
    "partUsed": "Dried Roots and Stolons",
    "formulationType": "Classical Churna (Powder) / DGL Extract",
    "categoryTags": [
      "digestion",
      "respiratory",
      "general_wellness"
    ],
    "shortDescription": "Sweet demulcent root studied for soothing gastric mucosa and supporting upper respiratory ease.",
    "whatItIs": "Yashtimadhu (Licorice) is a classic Ayurvedic sweet (Madhura) demulcent herb revered for its cooling Pittashamaka and mucosal protective virtues.",
    "traditionalUses": [
      "Classified in Charaka Samhita as Kantha (throat soothing), Varnya (complexion promoting), and Chardinigrahana (anti-emetic).",
      "Provides Sheeta (cooling) veerya and Madhura (sweet) vipaka, neutralizing excess gastric acidity.",
      "Traditionally consumed with honey, milk, or ghee."
    ],
    "potentialWellnessSupport": [
      "Assists in coating and soothing sensitive gastric and esophageal mucosal lining.",
      "Supports clear pharyngeal comfort and relief from dry tickling throat irritation.",
      "Investigated in human clinical trials for supporting functional dyspepsia comfort."
    ],
    "scientificEvidenceSummary": "Extensive peer-reviewed clinical trials support the role of Glycyrrhiza glabra and Deglycyrrhizinated Licorice (DGL) in alleviating functional dyspepsia and heartburn symptoms by promoting mucosal mucin production. Systemic reviews also substantiate its soothing demulcent properties for upper respiratory pathways.",
    "keyConstituents": "Glycyrrhizin, Glycyrrhetinic acid, Liquiritin, Isoliquiritigenin, Glabridin, and Polysaccharide mucilage.",
    "safetyPrecautions": "Whole unextracted licorice containing high glycyrrhizin can cause pseudoaldosteronism (sodium retention and potassium loss) with long-term heavy use. Use DGL form if taking long-term.",
    "whoShouldAvoid": "Individuals with uncontrolled hypertension, severe hypokalemia, chronic kidney failure, or pregnant women.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Traditional Churna: 2–4 g daily with warm water or milk. Standardized DGL chewable: 380–760 mg before meals.",
    "sources": [
      {
        "title": "WHO Monographs on Selected Medicinal Plants (Vol 1) - Radix Glycyrrhizae",
        "url": "https://www.who.int/publications/m/item/who-monographs-on-selected-medicinal-plants---volume-1",
        "type": "International Health Authority",
        "publisher": "World Health Organization"
      },
      {
        "title": "Clinical Evaluation of Glycyrrhiza glabra Extract in Functional Dyspepsia (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22020297/",
        "type": "Peer-reviewed Journal",
        "publisher": "Evidence-Based Complementary and Alternative Medicine"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "gokshura-churna",
    "name": "Gokshura Churna",
    "commonName": "Small Caltrops / Puncture Vine",
    "botanicalName": "Tribulus terrestris L.",
    "partUsed": "Dried Fruits and Roots",
    "formulationType": "Classical Fruit Powder (Churna) / Standardized Extract",
    "categoryTags": [
      "urinary",
      "energy",
      "general_wellness"
    ],
    "shortDescription": "Traditional Mutrala fruit powder investigated for urinary tract comfort, fluid balance, and vitality.",
    "whatItIs": "Gokshura is an essential Ayurvedic herb known for its unique combination of Mutrala (diuretic) and Vrishya (rejuvenative/vitalizing) properties without depleting bodily electrolytes.",
    "traditionalUses": [
      "Documented as a primary herb in Mutravaha Srotas (urinary tract) management and Shothahara (fluid balance).",
      "Features Madhura (sweet) rasa, Sheeta (cooling) veerya, and Madhura vipaka, soothing urinary burning sensation.",
      "Consumed traditionally as a decoction with honey or Gokshuradi Guggulu."
    ],
    "potentialWellnessSupport": [
      "Supports healthy urinary outflow, bladder comfort, and micro-crystal clearance.",
      "Studied in human trials for assisting physical vitality, libido, and athletic recovery.",
      "Helps maintain balanced renal fluid filtration pathways."
    ],
    "scientificEvidenceSummary": "Clinical trials evaluating Tribulus terrestris fruit extracts demonstrate mild, safe diuretic action, improvement in lower urinary tract symptom (LUTS) comfort scores, and supportive parameters in male and female vitality. It functions as a gentle urinary and physical adaptogen.",
    "keyConstituents": "Furostanol and spirostanol saponins (Protodioscin, Tribuloside), Flavonoids (Rutin, Quercetin), and Alkaloids.",
    "safetyPrecautions": "May have mild blood pressure-lowering and diuretic actions. Discontinue 2 weeks prior to planned surgical procedures.",
    "whoShouldAvoid": "Pregnant and nursing women, individuals with severe benign prostatic hypertrophy complications, or those on potassium-sparing diuretics without monitoring.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Traditional dosage: 3–6 g fruit churna boiled in water as Kashaya, or 250–500 mg standardized extract twice daily.",
    "sources": [
      {
        "title": "Ayurvedic Pharmacopoeia of India (API) Monograph on Tribulus terrestris",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Clinical Investigation of Tribulus terrestris on Urological and Vitality Markers (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25225400/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Dietary Supplements"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "manjistha-extract",
    "name": "Manjistha Extract",
    "commonName": "Indian Madder",
    "botanicalName": "Rubia cordifolia L.",
    "partUsed": "Dried Roots and Stems",
    "formulationType": "Standardized Root Extract / Classical Churna",
    "categoryTags": [
      "skin",
      "immunity",
      "general_wellness"
    ],
    "shortDescription": "Classical Raktashodhaka root studied for microvascular circulation and dermatological balance.",
    "whatItIs": "Manjistha is recognized in Ayurveda as the supreme blood-purifying (Raktashodhaka) and lymphatic drainage herb, balancing stagnant Pitta and Kapha.",
    "traditionalUses": [
      "Documented in Charaka Samhita under Varnya (complexion promoting), Vishaghna (anti-toxin), and Jvarahara.",
      "Features Tikta (bitter), Kashaya (astringent), and Madhura (sweet) tastes with Ushna (hot) potency.",
      "Traditionally taken as decoction (Kwatha) or compounded into classical Mahamanjisthadi Kwatha."
    ],
    "potentialWellnessSupport": [
      "Supports healthy dermal microcirculation and radiant skin complexion.",
      "Provides concentrated anthraquinone antioxidants protecting against lipid peroxidation.",
      "Aids in lymphatic system drainage and natural metabolic waste elimination."
    ],
    "scientificEvidenceSummary": "Scientific investigations highlight Rubia cordifolia for its significant in vitro and animal model antioxidant, anti-inflammatory, and microvascular protective effects. Preliminary human clinical observations in integrative dermatology show positive adjunct outcomes in inflammatory acne vulgaris and skin tone equilibrium.",
    "keyConstituents": "Anthraquinones (Purpurin, Munjistin, Alizarin, Pseudopurpurin), Rubiadins, Rubiadin-1-methyl ether, and Tannins.",
    "safetyPrecautions": "May temporarily tint urine and sweat a harmless reddish or dark amber color due to natural plant anthraquinones.",
    "whoShouldAvoid": "Pregnant and lactating women, individuals with acute kidney stone history without supervision, or severe iron deficiency (tannin binding).",
    "evidenceLevel": "C",
    "evidenceLevelLabel": "Classical / Preliminary Evidence",
    "dosageGuidance": "Traditional dosage: 1–3 g root churna with warm water or honey after food, or 250–500 mg standardized extract.",
    "sources": [
      {
        "title": "CCRAS Pharmacological Monograph on Rubia cordifolia",
        "url": "http://ccras.nic.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Pharmacological Evaluation of Rubia cordifolia Bioactives (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24050212/",
        "type": "Peer-reviewed Journal",
        "publisher": "Frontiers in Pharmacology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "haridra-khanda",
    "name": "Haridra Khanda",
    "commonName": "Curcuma Classical Confection",
    "botanicalName": "Curcuma longa compound formulation with Trikatu, Vidanga, and Trivrit",
    "partUsed": "Compounded Herbal Granules",
    "formulationType": "Classical Medicated Granules / Confection (Khanda)",
    "categoryTags": [
      "respiratory",
      "skin",
      "immunity"
    ],
    "shortDescription": "Classical turmeric granule formulation evaluated for seasonal allergic rhinitis and urticaria comfort.",
    "whatItIs": "Haridra Khanda is a premier classical Ayurvedic proprietary granule formulation featuring Turmeric processed with cow ghee, milk, cane sugar, and bioavailability synergists (Trikatu, Triphala, Vidanga).",
    "traditionalUses": [
      "Described in Bhaishajya Ratnavali specifically for Sheetapitta (urticaria), Udarda (allergic skin flares), and Kotha.",
      "Strongly pacifies aggravated Kapha and Pitta allergens lodged in Rasa and Rakta Dhatus.",
      "Taken with warm milk or lukewarm water twice daily."
    ],
    "potentialWellnessSupport": [
      "Supports upper airway comfort and reduces seasonal sneezing/rhinorrhea episodes.",
      "Aids in calming cutaneous histamine manifestations and allergic itching.",
      "Provides synergistic bio-enhanced curcuminoid bioavailability through natural lipid processing."
    ],
    "scientificEvidenceSummary": "Clinical trials conducted in Ayurvedic teaching hospitals in India demonstrated statistically significant reductions in symptoms of allergic rhinitis and chronic urticaria (itching, erythema, wheal formation) in patients treated with Haridra Khanda over 4–6 weeks. Its multi-herb matrix stabilizes mast cell degranulation.",
    "keyConstituents": "Curcuminoids, Piperine, Gingerols, Embelin, Tannins, and Bioactive Lipids from clarified butter.",
    "safetyPrecautions": "Contains natural sugar and cow's milk base. Diabetic patients should monitor blood glucose or choose sugar-free extract alternatives.",
    "whoShouldAvoid": "Individuals with severe dairy allergies, uncontrolled diabetes mellitus, or gallstone obstructions (choleretic effect of turmeric).",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Classical dosage: 3–6 g granules (1 teaspoon) twice daily with warm milk or water after meals.",
    "sources": [
      {
        "title": "Ayurvedic Formulary of India (AFI) - Haridra Khanda Formulation Standards",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Ministry of AYUSH"
      },
      {
        "title": "Clinical Evaluation of Haridra Khanda in Allergic Rhinitis & Urticaria (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23766579/",
        "type": "Peer-reviewed Journal",
        "publisher": "AYU Journal"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "khadiradi-vati",
    "name": "Khadiradi Vati",
    "commonName": "Catechu Oral Pastille Tablet",
    "botanicalName": "Acacia catechu (L.f.) Willd. compound formulation with Triphala, Kankola, and Jatiphal",
    "partUsed": "Heartwood Extract Compounded Tablet",
    "formulationType": "Classical Medicated Tablet / Oral Pastille (Vati)",
    "categoryTags": [
      "oral_health",
      "respiratory",
      "general_wellness"
    ],
    "shortDescription": "Classical astringent pastille studied for oral hygiene, gingival resilience, and throat soothing.",
    "whatItIs": "Khadiradi Vati is a classical astringent (Kashaya) pastille tablet prepared from the concentrated aqueous extract of Khadira (Acacia catechu) heartwood and aromatic carminatives for oral retention.",
    "traditionalUses": [
      "Documented in Charaka Samhita and Sharngadhara Samhita as the premier remedy for Mukharoga (oral/dental issues) and Galaroga (throat ailments).",
      "Dissolved slowly in the mouth (Mukhapaka) to exert local Kashaya astringent and healing actions.",
      "Eliminates Mukha Daurgandhya (bad breath) and firms spongy gingival tissues."
    ],
    "potentialWellnessSupport": [
      "Supports oral mucosal integrity and firm, healthy gum margins.",
      "Soothes hoarseness of voice and vocal cord strain in speakers and singers.",
      "Inhibits common oral bacteria responsible for dental plaque accumulation."
    ],
    "scientificEvidenceSummary": "Clinical investigations in dental and Ayurvedic clinical trials demonstrate that Khadiradi Vati tablets dissolved as pastilles significantly reduce gingival index scores, plaque accumulation, and bacterial counts of Streptococcus mutans in oral cavities. It provides local pharyngeal and gingival antiseptic benefits.",
    "keyConstituents": "Catechin, Epicatechin, Catechutannic acid, Quercetin, Flavonoids, and Essential Oils (Camphor, Nutmeg).",
    "safetyPrecautions": "For oral dissolution (chewed or sucked slowly). Highly astringent taste; avoid excess consumption which could cause mild constipation.",
    "whoShouldAvoid": "Young children who cannot safely suck lozenges (choking risk), or individuals with known hypersensitivity to Acacia species.",
    "evidenceLevel": "B",
    "evidenceLevelLabel": "Promising Human Evidence",
    "dosageGuidance": "Classical dosage: 1–2 tablets kept in mouth and dissolved slowly 3 to 4 times a day.",
    "sources": [
      {
        "title": "Ayurvedic Pharmacopoeia of India (API) Monograph on Khadiradi Vati",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Pharmacopoeial Commission for Indian Medicine"
      },
      {
        "title": "Clinical Evaluation of Khadiradi Vati in Gingivitis and Periodontal Health (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24587588/",
        "type": "Peer-reviewed Journal",
        "publisher": "Journal of Indian Society of Periodontology"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  },
  {
    "id": "shallaki-extract",
    "name": "Shallaki Extract",
    "commonName": "Indian Frankincense / Salai Guggul",
    "botanicalName": "Boswellia serrata Roxb. ex Colebr.",
    "partUsed": "Purified Oleo-Gum-Resin (Niryasa)",
    "formulationType": "Standardized Gum-Resin Extract (Capsule / Tablet)",
    "categoryTags": [
      "joints",
      "pain",
      "general_wellness"
    ],
    "shortDescription": "Standardized gum-resin extract investigated for joint comfort, cartilage resilience, and physical mobility.",
    "whatItIs": "Shallaki is a classical Ayurvedic tree resin renowned for its Sandhaniya (joint-supportive) and Shothahara (anti-swelling) properties, traditionally pacifying aggravated Vata and Kapha in musculoskeletal channels.",
    "traditionalUses": [
      "Classified in classical treatises for Sandhivata (joint stiffness/discomfort) and Amavata.",
      "Features Tikta-Kashaya-Madhura tastes with Ushna (warming) potency, clearing deep metabolic Ama from synovial tissues.",
      "Traditionally combined with warm water, Guggulu formulations, or ginger decoction."
    ],
    "potentialWellnessSupport": [
      "Supports comfortable joint flexion, knee walking distance, and morning joint ease.",
      "Inhibits 5-lipoxygenase (5-LOX) pathway mediating leukotriene synthesis without gastric ulcerogenic effects.",
      "Assists in protecting joint connective matrix integrity from accelerated degradation."
    ],
    "scientificEvidenceSummary": "Multiple double-blind, randomized, placebo-controlled human clinical trials (e.g., assessing 5-Loxin, Aflapin, and standardized Boswellia serrata extracts) demonstrate statistically significant reductions in knee pain scores (WOMAC, VAS) and improvements in physical functional mobility within 30 to 90 days. It serves as a validated botanical adjunct for joint comfort.",
    "keyConstituents": "Boswellic acids (3-O-acetyl-11-keto-beta-boswellic acid / AKBA, beta-boswellic acid, 11-keto-beta-boswellic acid), Essential oils, and Terpenes.",
    "safetyPrecautions": "Generally well-tolerated. High doses may cause mild gastrointestinal fullness, heartburn, or nausea in sensitive stomachs. Take with or after meals.",
    "whoShouldAvoid": "Pregnant or nursing women (potential uterine-stimulating activity in animal studies), individuals with acute gastritis, or those taking prescription anti-inflammatory pharmaceuticals without clinician guidance.",
    "evidenceLevel": "A",
    "evidenceLevelLabel": "Strong Human Evidence",
    "dosageGuidance": "Standardized extract (containing 30–65% boswellic acids / AKBA): 250–500 mg twice daily with meals.",
    "sources": [
      {
        "title": "Ayurvedic Pharmacopoeia of India (API) - Boswellia serrata Monograph",
        "url": "http://ayush.gov.in",
        "type": "Government / AYUSH",
        "publisher": "Pharmacopoeial Commission for Indian Medicine"
      },
      {
        "title": "Efficacy and Tolerability of Boswellia serrata in Knee Joint Mobility: Meta-Analysis (PubMed)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32680575/",
        "type": "Peer-reviewed Journal",
        "publisher": "BMC Complementary Medicine and Therapies"
      }
    ],
    "lastVerifiedDate": "2026-08-25"
  }
];

export default REMEDIES;
