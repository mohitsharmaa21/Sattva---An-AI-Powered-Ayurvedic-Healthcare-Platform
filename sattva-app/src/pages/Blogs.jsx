import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const EVIDENCE_BADGE_MAP = {
  A: {
    label: "Level A: Strong Human Evidence",
    class: "badge-evidence-a",
  },
  B: {
    label: "Level B: Promising Human Evidence",
    class: "badge-evidence-b",
  },
  C: {
    label: "Level C: Classical / Preliminary",
    class: "badge-evidence-c",
  },
  D: {
    label: "Level D: Insufficient Evidence",
    class: "badge-evidence-d",
  },
};

const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding Vata, Pitta, and Kapha",
    desc: "A foundational guide to recognizing constitutional doshic patterns and maintaining physiological balance naturally.",
    fullContent:
      "Classical Ayurveda categorizes human functional physiology into three primary bio-energetic principles: Vata (governing kinetic movement and neurological activity), Pitta (governing metabolic transformation and enzymatic thermogenesis), and Kapha (governing anabolic structure, cohesion, and fluid lubrication). Every individual possesses a unique baseline constitutional proportion (Prakriti). When environmental stressors, improper diet (Ahara), or irregular lifestyle (Vihara) disturb this baseline, a state of imbalance (Vikriti) emerges. Recognizing early doshic fluctuations allows for targeted dietary adjustments and daily seasonal regimens (Ritucharya) before functional imbalances advance into clinical pathology.",
    ayurvedicPerspective: "Described in Charaka Samhita as the foundational Tridosha framework governing homeostasis and systemic immunity (Ojas).",
    scientificEvidence: "Contemporary chronobiology and phenotypic genomics correlate Ayurvedic Prakriti types with specific autonomic nervous system tendencies, metabolic rates, and HLA gene expression profiles.",
    ingredients: ["Self-awareness", "Dietary observation (Ahara)", "Seasonal routine (Ritucharya)", "Balanced circadian rhythm"],
    howToUse:
      "Observe bodily responses to temperature, digestion speed, sleep quality, and seasonal transitions to tailor appropriate diet and lifestyle practices.",
    safetyNotes: "Dosha self-assessment is an educational framework for lifestyle optimization, not a substitute for formal clinical diagnosis.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Observational / Phenotypic Evidence",
    popupKeywords: ["Dosha", "Basics", "Digestion"],
    sources: [
      {
        title: "Charaka Samhita (Sutra Sthana Ch. 1 - Fundamental Principles)",
        url: "http://ayush.gov.in",
        type: "Classical Treatise / Ministry of AYUSH",
      },
      {
        title: "Ayurgenomics: Genomic classification based on Ayurvedic Prakriti (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/18797444/",
        type: "Peer-reviewed Scientific Journal",
      },
    ],
  },
  {
    id: 2,
    title: "Ashwagandha: Stress & Cortisol Modulation",
    desc: "How Withania somnifera standardized root extract supports perceived stress resilience and restorative sleep architecture.",
    fullContent:
      "Ashwagandha (Withania somnifera) is celebrated in classical Ayurvedic treatises as a premier Medhya Rasayana (cognitive and vitality rejuvenator). Modern pharmacological investigations indicate that standardized withanolide fractions interact with the hypothalamic-pituitary-adrenal (HPA) axis, attenuating excessive cortisol secretion in response to physiological and psychological stressors. Multiple randomized, double-blind, placebo-controlled human clinical trials demonstrate significant reductions in perceived stress scale (PSS) scores and improvements in non-restorative sleep parameters over 60 to 90 days. It should be understood as a physiological adaptogen supporting daily resilience rather than an outright clinical cure for psychiatric disorders.",
    ayurvedicPerspective: "Classified as Balya (strength-promoting) and Rasayana; specifically pacifies aggravated Vata and Kapha caused by physical exhaustion and mental fatigue.",
    scientificEvidence: "Double-blind clinical trials (e.g., KSM-66, Sensoril) confirm statistically significant reductions in serum cortisol (-23% to -30%) and improvements in Pittsburgh Sleep Quality Index scores.",
    ingredients: ["Standardized Withania somnifera Root Extract (Withanolides)", "Warm Milk or Water (Traditional Anupana)", "Clarified Butter (Ghee)"],
    howToUse:
      "Take 300–600 mg of standardized root extract once or twice daily after food with warm water or milk. Best taken in the evening for sleep support.",
    safetyNotes: "Contraindicated in pregnancy (traditional abortifacient concern). May stimulate thyroid activity and augment sedative medications. Discontinue 2 weeks before scheduled surgery.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Stress", "Sleep", "Energy"],
    sources: [
      {
        title: "National Medicinal Plants Board (e-Charak) - Withania somnifera Profile",
        url: "https://echarak.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Systematic Review and Meta-Analysis of Ashwagandha in Stress & Anxiety (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/34254920/",
        type: "Peer-reviewed Journal (Current Neuropharmacology)",
      },
    ],
  },
  {
    id: 3,
    title: "Triphala: Digestive Motility & Antioxidant Support",
    desc: "Evidence-aware review of the classical three-myrobalan formulation for gentle bowel regularity and mucosal health.",
    fullContent:
      "Triphala ('three fruits') is an authentic classical polyherbal formula compounding equal proportions of Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula). Rather than acting as an aggressive, habit-forming cathartic stimulant, Triphala provides gentle Anulomana (bowel-regulating) and Deepana (digestive stimulant) actions. It contains exceptionally high concentrations of gallic acid, ellagic acid, chebulinic acid, and natural vitamin C. These bioactive tannins exert mucosal antioxidant protection and act as gentle prebiotics, supporting beneficial gut microbiota diversity without depleting electrolytes. Claims of commercial 'whole-body detoxification' are medically unfounded; its true value lies in safe gastrointestinal motility and antioxidant mucosal tone.",
    ayurvedicPerspective: "Documented in Sushruta Samhita as a master Rasayana that balances all three doshas (Tridoshashamaka) with predominant Kashaya (astringent) and Madhura (sweet) post-digestive taste.",
    scientificEvidence: "Clinical trials in functional constipation demonstrate significant improvements in stool frequency, complete evacuation, and gastrointestinal comfort without mucosal tolerance.",
    ingredients: ["Amalaki (Emblica officinalis)", "Bibhitaki (Terminalia bellirica)", "Haritaki (Terminalia chebula) in equal 1:1:1 ratio"],
    howToUse:
      "Mix 1 teaspoon (3–6 g) of churna in a cup of lukewarm water. Consume 30 minutes before bedtime.",
    safetyNotes: "High doses can cause loose stools or abdominal cramping. Not recommended during acute diarrhea, active dysentery, or pregnancy.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Digestion", "Gut Health", "Antioxidant"],
    sources: [
      {
        title: "Ayurvedic Pharmacopoeia of India (API) Monograph on Triphala Churna",
        url: "http://ayush.gov.in",
        type: "Government / Pharmacopoeial Commission",
      },
      {
        title: "Clinical Evaluation of Triphala in Gastrointestinal Motility (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28696777/",
        type: "Peer-reviewed Journal (J Altern Complement Med)",
      },
    ],
  },
  {
    id: 4,
    title: "Brahmi: Cognitive Processing & Working Memory",
    desc: "Evaluating Bacopa monnieri for working memory retention, attention span, and cognitive processing speed.",
    fullContent:
      "Brahmi (Bacopa monnieri) is celebrated in the Ayurvedic pharmacopoeia as the foremost Medhya Rasayana—an herb specifically intended to cultivate intellect (Dhi), memory retention (Dhriti), and recall (Smriti). Standardized extracts rich in bacosides A and B have been investigated in multiple rigorous randomized controlled trials. Mechanistically, bacosides facilitate synaptic neurotransmission, modulate acetylcholine levels, and promote dendritic arborization in hippocampal neurons. Meta-analyses of human trials show statistically significant improvements in speed of information processing, verbal learning memory, and attention span after 8 to 12 weeks of continuous supplementation. It should not be represented as a treatment for acute neurological or psychiatric disorders.",
    ayurvedicPerspective: "Pacifies aggravated Sadhaka Pitta and Prana Vata, clearing mental agitation and soothing heat in the Manovaha Srotas (mental channels).",
    scientificEvidence: "Meta-analysis of randomized controlled trials confirms significant improvements in cognitive task performance, working memory consolidation, and reduced reaction times.",
    ingredients: ["Bacopa monnieri standardized leaf extract (min. 20% Bacosides)", "Clarified Butter (Ghee) or Warm Water"],
    howToUse:
      "Take 300–500 mg standardized extract daily with meals. Because active bacosides are lipophilic, taking with dietary fats (such as milk or ghee) maximizes absorption.",
    safetyNotes: "May cause mild gastrointestinal cramping, nausea, or increased bowel motility if taken on an empty stomach. Use with caution in individuals with severe bradycardia.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Brain", "Focus", "Memory"],
    sources: [
      {
        title: "CCRAS Monograph on Medhya Rasayana Herbs (Bacopa monnieri)",
        url: "http://ccras.nic.in",
        type: "Government / Central Council for Research in Ayurvedic Sciences",
      },
      {
        title: "Meta-analysis of Randomized Controlled Trials on Cognitive Effects of Bacopa (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24481962/",
        type: "Peer-reviewed Journal (J Ethnopharmacol)",
      },
    ],
  },
  {
    id: 5,
    title: "Turmeric & Bioavailable Curcuminoids",
    desc: "Optimizing the bioavailability and systemic absorption of Curcuma longa with piperine and lipid carriers.",
    fullContent:
      "Haridra (Curcuma longa) has been central to Ayurvedic healing for millennia, valued for its Shothahara (anti-swelling) and Varnya (complexion-evening) properties. While raw curcumin is notoriously hydrophobic and poorly absorbed by the human intestinal tract, classical Ayurveda always compounded turmeric with Piper nigrum (Maricha / Black Pepper) or lipid carriers (Taila/Ghrita). Contemporary pharmacokinetic research verifies this classical wisdom: the alkaloid piperine inhibits hepatic and intestinal glucuronidation, increasing curcuminoid bioavailability by up to 2000%. Clinical trials confirm that bio-enhanced turmeric preparations help modulate inflammatory signaling pathways (NF-kB, COX-2) and support joint comfort without gastric ulceration.",
    ayurvedicPerspective: "Possesses Katu-Tikta (pungent-bitter) rasa and Ushna (warming) veerya; purifies Rakta Dhatu and clears stagnant Kapha blockages.",
    scientificEvidence: "Numerous clinical trials and systematic reviews validate standardized curcumin-piperine complexes for reducing joint stiffness and supporting cellular antioxidant capacity.",
    ingredients: ["Curcuma longa Rhizome Extract (95% Curcuminoids)", "Black Pepper Extract (Piperine 95%)", "Virgin Coconut Oil or Ghee"],
    howToUse:
      "Combine 500 mg standardized curcumin extract with 5 mg piperine, or boil 1/2 tsp turmeric powder with a pinch of black pepper in warm milk.",
    safetyNotes: "High doses may irritate sensitive gastric mucosa. Avoid medicinal doses in individuals with bile duct obstruction, active gallstones, or concurrent blood thinners.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Immunity", "Joints", "Antioxidant"],
    sources: [
      {
        title: "Ayurvedic Pharmacopoeia of India (API) - Curcuma longa Standards",
        url: "http://ayush.gov.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Curcumin: A Review of Its Effects on Human Health (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29065496/",
        type: "Peer-reviewed Journal (Foods)",
      },
    ],
  },
  {
    id: 6,
    title: "Shatavari: Female Physiological Adaptogen",
    desc: "Investigating Asparagus racemosus for reproductive transitions, mucosal hydration, and adaptogenic vitality.",
    fullContent:
      "Shatavari (Asparagus racemosus), translating classically as 'she who possesses a hundred husbands', is the premier rejuvenative tonic for female reproductive physiology in Ayurveda. It is rich in steroidal saponins (Shatavarins I–IV), isoflavones, and polysaccharide mucilage. In classical practice, it is revered as Stanyajanana (galactagogue) and Rasayana for pacifying excessive Pitta heat and nourishing dry Vata tissues. Human clinical evaluations have observed supportive effects on prolactin response during lactation and meaningful reductions in vasomotor symptoms (hot flashes, fatigue, mood irritability) during menopausal transitions. It operates as a gentle botanical adaptogen and should not be confused with synthetic hormone replacement therapy.",
    ayurvedicPerspective: "Features Sheeta (cooling) veerya and Madhura (sweet) vipaka, providing deep hydration and pacifying aggravated Pitta in Shukra and Artava Dhatus.",
    scientificEvidence: "Double-blind clinical trials confirm galactagogue activity in nursing mothers and reduction of subjective menopausal discomfort scores in peri-menopausal cohorts.",
    ingredients: ["Asparagus racemosus Tuberous Root Powder / Standardized Extract", "Warm Milk or Ghee (Traditional Vehicle)"],
    howToUse:
      "Take 3–6 g of root churna daily boiled in a cup of warm milk, or 250–500 mg standardized extract twice daily with food.",
    safetyNotes: "Possesses mild phytoestrogenic activity. Individuals with estrogen-sensitive conditions (e.g., specific receptor-positive conditions) should consult an oncologist before use.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Hormones", "Women", "Vitality"],
    sources: [
      {
        title: "National Medicinal Plants Board (e-Charak) - Asparagus racemosus",
        url: "https://echarak.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Plant profile and review of Asparagus racemosus in female health (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29635127/",
        type: "Peer-reviewed Journal (Biomed Pharmacother)",
      },
    ],
  },
  {
    id: 7,
    title: "Tulsi: Respiratory & Adaptogenic Equilibrium",
    desc: "Exploring Ocimum sanctum for upper airway comfort, antioxidant defense, and environmental stress resilience.",
    fullContent:
      "Tulsi (Ocimum tenuiflorum / Ocimum sanctum), known as 'The Incomparable One', holds a sacred standing in Ayurvedic medicine for respiratory and metabolic harmony. The leaves contain rich volatile fractions of eugenol, carvacrol, ursolic acid, and rosmarinic acid. Classical texts document Tulsi as Shvasahara (respiratory comfort provider) and Kaphaghna, liquefying viscous mucous secretions in the bronchial pathways. A comprehensive systematic review of 24 human clinical studies published in evidence-based medical literature confirmed that Tulsi supplementation safely supports glycemic parameters, cognitive endurance during stress, and seasonal upper respiratory comfort. It provides safe botanical support for daily environmental stressors.",
    ayurvedicPerspective: "Features Ushna (warming) veerya and Katu-Tikta (pungent-bitter) rasa, clearing congested Pranavaha Srotas (respiratory pathways).",
    scientificEvidence: "Systematic review of 24 human trials confirms adaptogenic effects, positive modulation of immune cell counts, and significant reductions in seasonal respiratory discomfort.",
    ingredients: ["Fresh or Dried Ocimum sanctum Leaves", "Crushed Black Pepper (Optional)", "Pure Honey (Added after cooling)"],
    howToUse:
      "Infuse 5–7 leaves (or 1 tsp dried leaf churna) in boiling water for 5 minutes. Allow to cool to lukewarm before sweetening with honey.",
    safetyNotes: "May exert mild antiplatelet (blood-thinning) and hypoglycemic actions. Discontinue 2 weeks before surgery; monitor blood glucose if on insulin.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Respiratory", "Cough", "Immunity"],
    sources: [
      {
        title: "Ministry of AYUSH Public Advisory on Ocimum sanctum (Tulsi)",
        url: "http://ayush.gov.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28400848/",
        type: "Peer-reviewed Journal (Evid Based Complement Alternat Med)",
      },
    ],
  },
  {
    id: 8,
    title: "Giloy: Immunomodulation & Thermoregulation",
    desc: "Investigating Tinospora cordifolia (Guduchi) aqueous extract for macrophage activity and natural recovery support.",
    fullContent:
      "Giloy or Guduchi (Tinospora cordifolia), traditionally venerated as 'Amrita' (the nectar of immortality), is an essential Ayurvedic Rasayana climber. Pharmacological studies demonstrate that its unique arabinogalactan polysaccharides, cordifoliosides, and berberine alkaloids activate macrophage phagocytosis, stimulate neutrophil movement, and moderate pro-inflammatory cytokine expression. In classical practice, its concentrated aqueous stem extract (Ghana Vati) is indicated as Jvarahara (febrifuge) and Rasayana, supporting the body's natural convalescence after viral and microbial challenges. It supports natural immune surveillance rather than functioning as an artificial 'immune booster'. Authentic botanical identification is vital to avoid adulteration.",
    ayurvedicPerspective: "Balances all three doshas with unique heating veerya combined with sweet post-digestive vipaka; purifies Pitta without provoking Vata.",
    scientificEvidence: "Controlled human clinical trials and in vitro studies show significant enhancement of phagocytic indices, neutrophil activity, and supportive recovery kinetics.",
    ingredients: ["Tinospora cordifolia Pure Aqueous Stem Extract (Ghana)", "Lukewarm Water", "Pippali (Long Pepper) for metabolic synergy"],
    howToUse:
      "Take 500–1000 mg (1–2 tablets of Ghana Vati) twice daily after meals with warm water for 2 to 4 weeks during seasonal transitions.",
    safetyNotes: "May modulate immune activity; use under clinician guidance in active autoimmune conditions. Sourced only from verified genuine Tinospora cordifolia.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Immunity", "Thermoregulation", "General Wellness"],
    sources: [
      {
        title: "Ministry of AYUSH Advisory on Safe and Proper Use of Guduchi (Tinospora cordifolia)",
        url: "http://ayush.gov.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Immunomodulatory Role of Tinospora cordifolia in Human Studies (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/22830857/",
        type: "Peer-reviewed Journal (Indian J Pharmacol)",
      },
    ],
  },
  {
    id: 9,
    title: "Managing Joint Mobility with Shallaki",
    desc: "A clinical look at Boswellia serrata (AKBA) for joint comfort, cartilage protection, and walking ease.",
    fullContent:
      "Shallaki (Boswellia serrata), known globally as Indian Frankincense, is a revered classical gum-resin praised for Sandhaniya (joint-supportive) and Shothahara (anti-swelling) properties. The bioactive pentacyclic triterpenic acids, particularly 3-O-acetyl-11-keto-beta-boswellic acid (AKBA), selectively inhibit 5-lipoxygenase (5-LOX), a key enzyme mediating leukotriene synthesis that drives joint cartilage degradation. Unlike non-steroidal anti-inflammatory drugs (NSAIDs), standardized Boswellia extracts do not cause gastric ulceration or mucosal erosion. Multiple double-blind, randomized, placebo-controlled human trials show statistically significant improvements in knee joint mobility, walking distance, and WOMAC pain indices within 30 to 90 days.",
    ayurvedicPerspective: "Indicated in classical texts for Sandhivata (joint stiffness) and Amavata; pacifies Vata and Kapha by clearing deep-seated Ama from synovial tissues.",
    scientificEvidence: "Meta-analyses of randomized controlled clinical trials show statistically significant pain score reductions (VAS, WOMAC) and radiological cartilage preservation.",
    ingredients: ["Boswellia serrata Standardized Gum-Resin Extract (min. 30% AKBA / Boswellic acids)", "Warm Water"],
    howToUse:
      "Take 250–500 mg standardized extract twice daily immediately after meals with lukewarm water.",
    safetyNotes: "Generally very well tolerated. Mild gastric fullness or acid reflux may occur in sensitive individuals. Avoid during pregnancy due to potential uterine-stimulating effects in animal studies.",
    evidenceLevel: "A",
    evidenceLevelLabel: "Strong Human Evidence",
    popupKeywords: ["Pain", "Joints", "Inflammation"],
    sources: [
      {
        title: "Ayurvedic Pharmacopoeia of India (API) Monograph on Boswellia serrata",
        url: "http://ayush.gov.in",
        type: "Government / Pharmacopoeial Commission",
      },
      {
        title: "Efficacy and Tolerability of Boswellia serrata in Knee Joint Mobility: Meta-Analysis (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32680575/",
        type: "Peer-reviewed Journal (BMC Complement Med Ther)",
      },
    ],
  },
  {
    id: 10,
    title: "Shilajit: Cellular Energy & Bioenergetics",
    desc: "Evaluating Shodhita (purified) Himalayan mineral pitch rich in fulvic acid for mitochondrial ATP and physical vitality.",
    fullContent:
      "Shilajit is a natural mineral-organic exudate that oozes from high-altitude Himalayan rock fissures during peak summer heat. Charaka Samhita designates it as a master Rasayana and Yogavahi (bio-enhancer), asserting that when properly purified, it rejuvenates all seven Dhatus (tissues). Modern biochemical analysis confirms that Shilajit contains 40%–60% fulvic acid alongside dibenzo-alpha-pyrones (DBPs) and over 80 ionic trace minerals. Fulvic acid functions as a high-affinity molecular carrier, shuttling electrons directly into the mitochondrial respiratory chain to augment cellular ATP synthesis. Controlled clinical trials in human cohorts have demonstrated significant improvements in free and total testosterone, skeletal muscle endurance, and collagen production. Raw unpurified rock exudate contains heavy metals and must NEVER be consumed.",
    ayurvedicPerspective: "Described as Sarvaroga Pranashini (all-disease overcoming) and Vrishya (vitalizing); pacifies all three doshas with predominant Tikta-Kashaya-Katu rasa.",
    scientificEvidence: "Double-blind, placebo-controlled human trials on purified standardized Shilajit (e.g., Primavie) confirm enhanced mitochondrial energy synthesis and healthy hormonal parameters.",
    ingredients: ["Purified Himalayan Shilajit Resin (Shodhita Asphaltum)", "Lukewarm Water or Milk", "Pure Ghee / Honey"],
    howToUse:
      "Dissolve a small pea-sized portion (250–500 mg) of purified resin into a cup of warm water, milk, or herbal tea once daily in the morning.",
    safetyNotes: "Strictly consume ONLY lab-certified, purified (Shodhita) Shilajit resin tested for heavy metal purity. Avoid in active gout, hyperuricemia, or hemochromatosis.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Energy", "Vitality", "Men"],
    sources: [
      {
        title: "Ministry of AYUSH Standards on Shodhita Shilajit Purification Protocols",
        url: "http://ayush.gov.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Clinical Evaluation of Purified Shilajit on Testosterone and Cellular Bioenergetics (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/26395129/",
        type: "Peer-reviewed Journal (Andrologia)",
      },
    ],
  },
  {
    id: 11,
    title: "Bhringraj: Follicular Nourishment & Scalp Health",
    desc: "Topical application of Eclipta prostrata medicated oil for scalp conditioning and supporting the anagen hair phase.",
    fullContent:
      "Bhringraj (Eclipta prostrata / Eclipta alba) is celebrated in classical Dravyaguna treatises as 'Kesharaaja'—the king of herbs for hair wellness. In traditional practice, fresh plant juice and cooling botanical extracts (Manjistha, Padmaka, Haritaki) are slowly decocted into a cured sesame or coconut oil base (Keshya Taila). Pharmacological evaluations indicate that wedelolactone, demethylwedelolactone, and stigmasterol bioactives nourish dermal papilla cells and stimulate microcirculation across the scalp vertex. In comparative preclinical models, topical Eclipta alba extract significantly accelerated hair follicle transition into the active anagen growth phase. Classical Shiroabhyanga (head massage) also pacifies localized Pitta heat and calms nervous tension.",
    ayurvedicPerspective: "Features Tikta-Katu (bitter-pungent) rasa and Ushna veerya; cools Pitta heat in the scalp that traditionally triggers premature graying (Palitya) and hair shedding (Khalitya).",
    scientificEvidence: "Comparative pharmacological studies verify that topical Eclipta extracts prolong the anagen hair follicle phase and improve follicular density in animal models.",
    ingredients: ["Eclipta prostrata (Bhringraj) Whole Herb Extract", "Cold-Pressed Sesame or Coconut Oil Base", "Manjistha & Sariva extracts"],
    howToUse:
      "Warm 5–10 mL of oil gently. Massage into scalp using circular fingertip motions for 10 minutes. Leave on for at least 1 hour or overnight before washing with a gentle cleanser.",
    safetyNotes: "Strictly for external topical application. Perform a 24-hour skin patch test before first use to ensure no contact allergy to herbal base oils.",
    evidenceLevel: "C",
    evidenceLevelLabel: "Classical / Preclinical Evidence",
    popupKeywords: ["Hair", "Skin", "Cooling"],
    sources: [
      {
        title: "National Medicinal Plants Board (e-Charak) - Eclipta prostrata",
        url: "https://echarak.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Hair Growth Promoting Activity of Eclipta alba in Preclinical Models (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/19481594/",
        type: "Peer-reviewed Journal (J Ethnopharmacol)",
      },
    ],
  },
  {
    id: 12,
    title: "Neem: Dermal Balance & Botanical Defense",
    desc: "Understanding Azadirachta indica bitter bioactives for skin microflora balance and localized topical care.",
    fullContent:
      "Neem (Azadirachta indica) is documented in classical Ayurveda as 'Arishta'—the perfect, imperishable reliever of sickness. It possesses an intensely bitter (Tikta) and astringent (Kashaya) taste profile with pronounced cooling (Sheeta) potency. Classical texts designate it as Kushthaghna (skin pacifier) and Kandughna (soothing dermal itching). Its limonoid constituents—such as azadirachtin, nimbin, and nimbidin—demonstrate robust in vitro antibacterial efficacy against Cutibacterium acnes, alongside free-radical scavenging capacity. In modern practice, standardized neem extracts are utilized for short-term seasonal skin balance. Long-term, high-dose internal consumption is strictly discouraged due to potent bitter alkaloids that place demand on hepatic and renal clearance.",
    ayurvedicPerspective: "Strongly pacifies aggravated Pitta and Kapha morbidities manifesting as redness, excessive sebum, and blemishes in cutaneous layers.",
    scientificEvidence: "Dermatological and in vitro investigations substantiate significant broad-spectrum antimicrobial and anti-inflammatory activity against cutaneous pathogens.",
    ingredients: ["Azadirachta indica Standardized Leaf/Bark Extract (Nimbin / Limonoids)", "Lukewarm Water"],
    howToUse:
      "Take 250–500 mg once daily with water after meals for a restricted period of 2 to 4 weeks, or apply as a topical paste.",
    safetyNotes: "Not for long-term daily consumption. Absolutely contraindicated during pregnancy, lactation, infancy, and in couples actively trying to conceive (documented anti-fertility effects in preclinical studies).",
    evidenceLevel: "C",
    evidenceLevelLabel: "Classical / Preliminary Evidence",
    popupKeywords: ["Skin", "Immunity", "Cooling"],
    sources: [
      {
        title: "CCRAS Monograph on Azadirachta indica Safety & Pharmacology",
        url: "http://ccras.nic.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Biological Activities and Medicinal Properties of Neem (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/15777222/",
        type: "Peer-reviewed Journal (Current Science)",
      },
    ],
  },
  {
    id: 13,
    title: "Guggul: Lipid Turnover & Channel Cleansing",
    desc: "Clinical and classical perspectives on Commiphora wightii (Guggulipid) for healthy lipid turnover.",
    fullContent:
      "Guggul is the oleo-gum-resin tapped from the Commiphora wightii tree, which must undergo classical Shodhana (purification in Triphala decoction) before clinical use. Charaka Samhita categorizes Guggulu as the ultimate Lekhaniya (scraping / anti-adipose) agent, renowned for penetrating deep biological channels (Srotas) to scrape away stagnant metabolic waste (Ama and Meda Dhatu). Standardized extracts (Guggulipid) contain bioactive E- and Z-guggulsterones. Pharmacological research demonstrates that guggulsterones act as natural antagonists to the farnesoid X receptor (FXR), facilitating hepatic bile acid excretion and cholesterol turnover. While Indian clinical trials showed favorable lipid modulation, Western clinical studies observed variable results, establishing Guggul as a promising adjunct requiring concurrent dietary fiber and exercise.",
    ayurvedicPerspective: "Deeply penetrative (Teekshna/Sukshma) and hot (Ushna); clears deep-seated Ama in joints and lipid pathways without causing weakness.",
    scientificEvidence: "Clinical trials indicate favorable modulation of triglycerides and lipid fractions when paired with balanced nutrition; evidence is promising with dietary interdependence.",
    ingredients: ["Shuddha Guggulu (Purified Commiphora wightii Oleo-Resin, 2.5% Guggulsterones)", "Triphala Decoction Vehicle"],
    howToUse:
      "Take 250–500 mg standardized Guggulipid extract twice daily with warm water after meals.",
    safetyNotes: "May stimulate thyroid hormones and interact with CYP3A4-metabolized drugs and blood thinners. Contraindicated in pregnancy (uterine stimulant) and severe liver impairment.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Metabolism", "Cardiovascular", "Lipids"],
    sources: [
      {
        title: "Ayurvedic Pharmacopoeia of India (API) Monograph on Shuddha Guggulu",
        url: "http://ayush.gov.in",
        type: "Government / Pharmacopoeial Commission",
      },
      {
        title: "Evaluation of Commiphora mukul (Guggul) in Lipid Profiles (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/12915431/",
        type: "Peer-reviewed Journal (JAMA)",
      },
    ],
  },
  {
    id: 14,
    title: "Arjuna: Cardioprotective Bark & Endothelial Health",
    desc: "Investigating Terminalia arjuna bark Kshirapaka for myocardial endurance and vascular antioxidant defense.",
    fullContent:
      "Arjuna (Terminalia arjuna) is hailed in Ayurvedic classics as the premier Hridya (cardiotonic) tree bark, documented extensively by Vagbhata in Ashtanga Hridaya. The thick stem bark is naturally packed with oligomeric proanthocyanidins (OPCs), arjunic acid, arjunolic acid, and flavonoids like luteolin. Classical practitioners administer Arjuna by boiling the bark in milk and water (Arjuna Kshirapaka) to extract both water-soluble tannins and lipid-soluble glycosides. Clinical trials in patients with stable angina and post-infarction rehabilitation have observed that Terminalia arjuna extract significantly supports left ventricular ejection fraction, protects LDL cholesterol from oxidative modification, and supports endothelial elasticity. It serves as a gentle vascular tonic but must NEVER replace emergency cardiological pharmaceuticals.",
    ayurvedicPerspective: "Features Kashaya (astringent) rasa and Sheeta (cooling) veerya; pacifies Pitta and Kapha in Rakta Dhatu and firms cardiac muscular tone.",
    scientificEvidence: "Randomized clinical trials demonstrate improvements in left ventricular ejection fraction and exercise tolerance in chronic cardiovascular support cohorts.",
    ingredients: ["Terminalia arjuna Stem Bark Powder (Churna)", "Milk & Water (Classical Kshirapaka Decoction)"],
    howToUse:
      "Boil 3–6 g of bark powder in equal parts milk and water until water evaporates, strain and drink; or take 500 mg standardized extract twice daily.",
    safetyNotes: "Safe for complementary support. Never discontinue, adjust, or replace prescribed cardiovascular medications without consulting your cardiologist.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Cardiovascular", "Energy", "Vitality"],
    sources: [
      {
        title: "CCRAS Monograph on Terminalia arjuna in Cardiovascular Health",
        url: "http://ccras.nic.in",
        type: "Government / Ministry of AYUSH",
      },
      {
        title: "Clinical Evaluation of Terminalia arjuna in Cardiovascular Parameters (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/20805960/",
        type: "Peer-reviewed Journal (J Assoc Physicians India)",
      },
    ],
  },
  {
    id: 15,
    title: "Yashtimadhu: Mucosal Demulcent & Gastric Ease",
    desc: "How Glycyrrhiza glabra (DGL) supports gastric mucosal integrity and upper respiratory pharyngeal comfort.",
    fullContent:
      "Yashtimadhu (Glycyrrhiza glabra), known classically as Mulethi or Licorice, is celebrated in Charaka Samhita as Kantha (throat soothing), Varnya, and a premier demulcent. Its thick root contains glycyrrhizin, glabridin, liquiritin, and dense polysaccharide mucilages. When consumed, Yashtimadhu coats and soothes sensitive esophageal and gastric mucosal linings, promoting local mucin synthesis and protecting against acid irritation. Double-blind clinical trials in functional dyspepsia have validated that deglycyrrhizinated licorice (DGL) significantly alleviates upper gastric burning and discomfort without suppressing natural stomach acid. Its demulcent fractions also relieve dry pharyngeal tickling and hoarseness in singers and speakers.",
    ayurvedicPerspective: "Possesses Madhura (sweet) rasa, Sheeta (cooling) veerya, and Madhura vipaka, rapidly quenching aggravated Pitta heat in the stomach (Amasaya).",
    scientificEvidence: "Double-blind clinical trials substantiate that DGL extract significantly reduces symptoms of functional dyspepsia and heartburn by stimulating gastric mucosal mucin production.",
    ingredients: ["Glycyrrhiza glabra Root Powder (Churna) or Standardized DGL Extract", "Warm Water or Milk"],
    howToUse:
      "Chew 1–2 DGL tablets (380–760 mg) 20 minutes before meals, or take 2–3 g of root churna with warm water for throat ease.",
    safetyNotes: "Whole unextracted licorice with high glycyrrhizin can cause sodium retention and potassium loss with prolonged high-dose use. Individuals with hypertension should choose DGL formulations.",
    evidenceLevel: "B",
    evidenceLevelLabel: "Promising Human Evidence",
    popupKeywords: ["Digestion", "Respiratory", "General Wellness"],
    sources: [
      {
        title: "WHO Monographs on Selected Medicinal Plants (Vol 1) - Radix Glycyrrhizae",
        url: "https://www.who.int/publications/m/item/who-monographs-on-selected-medicinal-plants---volume-1",
        type: "International Health Authority / WHO",
      },
      {
        title: "Clinical Evaluation of Glycyrrhiza glabra Extract in Functional Dyspepsia (PubMed)",
        url: "https://pubmed.ncbi.nlm.nih.gov/22020297/",
        type: "Peer-reviewed Journal (Evid Based Complement Alternat Med)",
      },
    ],
  },
];

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKeyword, setActiveKeyword] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  const keywordsList = [
    "All",
    "Dosha",
    "Stress",
    "Sleep",
    "Digestion",
    "Brain",
    "Focus",
    "Joints",
    "Pain",
    "Women",
    "Respiratory",
    "Immunity",
    "Energy",
    "Hair",
    "Skin",
    "Cardiovascular",
    "Metabolism",
  ];

  const filteredBlogs = BLOG_DATA.map((blog) => {
    let score = 0;
    const q = searchQuery.toLowerCase().trim();

    if (q) {
      const titleLower = blog.title.toLowerCase();
      const descLower = blog.desc.toLowerCase();
      const contentLower = blog.fullContent.toLowerCase();
      const keywordsLower = blog.popupKeywords.map((k) => k.toLowerCase());

      if (titleLower === q) score += 100;
      else if (titleLower.includes(q)) score += 50;

      if (contentLower.includes(q)) score += 20;
      if (descLower.includes(q)) score += 20;

      if (keywordsLower.includes(q)) score += 30;
      else if (keywordsLower.some((kw) => kw.includes(q))) score += 10;

      if (score === 0) return null;
    }

    if (activeKeyword && activeKeyword !== "All") {
      const hasKw = blog.popupKeywords.some(
        (kw) => kw.toLowerCase() === activeKeyword.toLowerCase()
      );
      if (!hasKw) return null;
    }

    return { ...blog, score };
  })
    .filter((b) => b !== null)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div className="page-header" style={{ marginBottom: "24px" }}>
        <h1 className="page-title">Ayurvedic Clinical Knowledge</h1>
        <p className="page-subtitle">
          Evidence-aware clinical protocols, classical Ayurvedic mechanisms, and peer-reviewed pharmacological documentation verified against Ministry of AYUSH monographs and PubMed clinical literature.
        </p>
      </div>

      {/* STATUTORY EDUCATIONAL & HEALTHCARE DISCLAIMER */}
      <div className="remedies-disclaimer-banner" style={{ marginBottom: "28px" }}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p>
          <strong>Clinical & Traditional Context:</strong> Sattva provides general wellness information based on traditional Ayurveda and available research. It is not a substitute for professional medical diagnosis or treatment. Consult a qualified healthcare professional before using herbal products, especially if you are pregnant, breastfeeding, taking medicines, or managing a medical condition.
        </p>
      </div>

      {/* SEARCH AND FILTER TOOLBAR */}
      <div className="filter-bar" style={{ marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <div
          className="filter-input-wrap"
          style={{ flex: 1, minWidth: "260px", position: "relative" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="filter-input"
            placeholder="Search clinical protocols, herbs, or physiological domains..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 1 && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--muted)",
                fontSize: "14px",
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Keyword Pills */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {keywordsList.map((kw) => {
            const isSelected =
              (activeKeyword === kw) ||
              (!activeKeyword && kw === "All");

            return (
              <button
                key={kw}
                onClick={() =>
                  setActiveKeyword(kw === "All" ? null : kw)
                }
                style={{
                  background: isSelected ? "var(--green)" : "var(--surface-2)",
                  color: isSelected ? "white" : "var(--primary)",
                  border: isSelected ? "1px solid var(--green)" : "1px solid var(--border)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 650,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {kw}
              </button>
            );
          })}
        </div>
      </div>

      {/* PROTOCOL CARDS GRID */}
      {filteredBlogs.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredBlogs.map((blog) => {
            const badgeInfo = EVIDENCE_BADGE_MAP[blog.evidenceLevel] || {
              label: `Level ${blog.evidenceLevel || "B"}`,
              class: "badge-evidence-b",
            };

            return (
              <div
                key={blog.id}
                className="card-generic"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  borderRadius: "14px",
                  border: "1px solid var(--line)",
                  background: "white",
                  boxShadow: "0 2px 8px rgba(22,35,29,0.03)",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
              >
                {/* Header: Tags & Evidence Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {blog.popupKeywords.map((kw) => (
                      <span
                        onClick={() => setActiveKeyword(kw)}
                        key={kw}
                        style={{
                          background: "var(--soft-green)",
                          color: "var(--green)",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`badge-evidence ${badgeInfo.class}`}
                    style={{ fontSize: "10px", padding: "3px 8px", whiteSpace: "nowrap" }}
                  >
                    Level {blog.evidenceLevel || "B"}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 750,
                    color: "var(--ink)",
                    margin: "0 0 10px",
                    lineHeight: 1.35,
                  }}
                >
                  {blog.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#5f7067",
                    margin: "0 0 18px",
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {blog.desc}
                </p>

                {/* Structured Bullet Summary (Section 6) */}
                <ul
                  className="remedy-bullet-list"
                  style={{
                    margin: "0 0 18px",
                    paddingLeft: "16px",
                    fontSize: "12.5px",
                    color: "var(--ink)",
                    lineHeight: 1.5,
                  }}
                >
                  {blog.ayurvedicPerspective && (
                    <li style={{ marginBottom: "6px" }}>
                      <strong>Ayurvedic Role:</strong> {blog.ayurvedicPerspective}
                    </li>
                  )}
                  {blog.scientificEvidence && (
                    <li style={{ marginBottom: "6px" }}>
                      <strong>Evidence Note:</strong> {blog.scientificEvidence}
                    </li>
                  )}
                  {blog.safetyNotes && (
                    <li className="safety-bullet" style={{ color: "#9a4d12" }}>
                      <strong>Caution:</strong> {blog.safetyNotes}
                    </li>
                  )}
                </ul>

                {/* Card Action Button */}
                <button
                  onClick={() => setActiveBlog(blog)}
                  className="btn-product secondary"
                  style={{
                    width: "100%",
                    padding: "11px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginTop: "auto",
                    background: "var(--soft-green)",
                    color: "var(--green-deep)",
                    border: "1px solid #d9e8dc",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Read Clinical Protocol →
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="card-generic"
          style={{ padding: "60px 20px", textAlign: "center" }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "var(--ink)" }}>
            No clinical records found
          </h3>
          <p
            style={{
              margin: "0 0 24px",
              color: "var(--muted)",
              fontSize: "14px",
            }}
          >
            No documented clinical protocols match "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveKeyword(null);
            }}
            className="primary-button"
            style={{ padding: "10px 24px" }}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* ISOLATED DETAILED CLINICAL PROTOCOL MODAL */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(6px)",
              zIndex: 1000,
              overflowY: "auto",
              padding: "40px 16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveBlog(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              style={{
                background: "white",
                maxWidth: "840px",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                border: "1px solid var(--line)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveBlog(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "white",
                  border: "1px solid var(--border)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  zIndex: 10,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
                aria-label="Close protocol"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Modal Header */}
              <div
                style={{
                  padding: "36px 36px 28px",
                  background: "linear-gradient(to bottom, #f3f7f4, #ffffff)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  {activeBlog.popupKeywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        background: "white",
                        border: "1px solid var(--line)",
                        color: "var(--green)",
                        padding: "3px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                  <span
                    className={`badge-evidence ${
                      EVIDENCE_BADGE_MAP[activeBlog.evidenceLevel]?.class || "badge-evidence-b"
                    }`}
                    style={{ marginLeft: "auto", fontSize: "11px" }}
                  >
                    {EVIDENCE_BADGE_MAP[activeBlog.evidenceLevel]?.label || "Level B: Promising Human Evidence"}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "var(--green-deep)",
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {activeBlog.title}
                </h1>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#526359",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {activeBlog.desc}
                </p>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "32px 36px" }}>
                {/* Section 1: Detailed Clinical Overview */}
                <div style={{ marginBottom: "28px" }}>
                  <h3
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 800,
                      color: "var(--green)",
                      marginBottom: "10px",
                    }}
                  >
                    Clinical & Pharmacological Documentation
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--ink)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {activeBlog.fullContent}
                  </p>
                </div>

                {/* Section 2: Traditional Role & Evidence Summary */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "18px",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      background: "var(--cream)",
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 8px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--green)",
                      }}
                    >
                      Classical Ayurvedic Action
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13.5px",
                        color: "var(--ink)",
                        lineHeight: 1.6,
                      }}
                    >
                      {activeBlog.ayurvedicPerspective}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "var(--cream)",
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 8px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--green)",
                      }}
                    >
                      Modern Evidence Summary
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13.5px",
                        color: "var(--ink)",
                        lineHeight: 1.6,
                      }}
                    >
                      {activeBlog.scientificEvidence}
                    </p>
                  </div>
                </div>

                {/* Section 3: Ingredients & Administration Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "18px",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      background: "#faf9f6",
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--green-deep)",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      Active Botanical Bioactives
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "18px",
                        margin: 0,
                        color: "var(--ink)",
                        fontSize: "13px",
                        lineHeight: 1.65,
                      }}
                    >
                      {activeBlog.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#faf9f6",
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--green-deep)",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      Administration Protocol
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--ink)",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {activeBlog.howToUse}
                    </p>
                  </div>
                </div>

                {/* Section 4: Safety & Precautions */}
                {activeBlog.safetyNotes && (
                  <div
                    style={{
                      background: "#fffbf2",
                      border: "1px solid #f0dfbb",
                      borderRadius: "10px",
                      padding: "16px 20px",
                      marginBottom: "28px",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 6px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#965214",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      Safety, Precautions & Contraindications
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#744111",
                        lineHeight: 1.55,
                      }}
                    >
                      {activeBlog.safetyNotes}
                    </p>
                  </div>
                )}

                {/* Section 5: Verified Clickable Sources */}
                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 800,
                      color: "var(--muted)",
                    }}
                  >
                    Verified Primary & Secondary Sources:
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {activeBlog.sources.map((src, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "13px",
                        }}
                      >
                        <span
                          style={{
                            background: "var(--soft-green)",
                            color: "var(--green)",
                            fontSize: "10.5px",
                            fontWeight: 700,
                            padding: "2px 7px",
                            borderRadius: "4px",
                          }}
                        >
                          {src.type || "Official Source"}
                        </span>
                        {src.url ? (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "var(--green-deep)",
                              fontWeight: 600,
                              textDecoration: "underline",
                              wordBreak: "break-word",
                            }}
                          >
                            {src.title} ↗
                          </a>
                        ) : (
                          <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                            {src.title || src}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
