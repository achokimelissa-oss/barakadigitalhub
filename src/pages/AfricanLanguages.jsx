import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function AfricanLanguagesPage({ goBack }) {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>African Language Transcription — Baraka Digital Hub Insights</title>
        <meta name="description" content="The Languages AI Still Cannot Hear — And How BDH Is Changing That" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --navy:      #02346A;
          --navy-d:    #0D2B4E;
          --green:     #33911C;
          --teal:      #0D7377;
          --amber:     #E8A020;
          --off-white: #F5F7FA;
          --muted:     #6B7A91;
          --border:    #DDE3EC;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--off-white);
          color: var(--navy-d);
          line-height: 1.7;
        }

        .article-wrap {
          max-width: 740px;
          margin: 0 auto;
          padding: 64px 5% 100px;
        }

        .article-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .article-category::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--teal);
          border-radius: 2px;
        }

        h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--navy);
          line-height: 1.16;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }

        .article-divider {
          width: 48px;
          height: 3px;
          background: var(--green);
          border-radius: 3px;
          margin-bottom: 36px;
        }

        .article-body p {
          font-size: 1.05rem;
          line-height: 1.88;
          color: #2C3A52;
          margin-bottom: 24px;
        }

        .article-body h2 {
          font-family: 'Sora', sans-serif;
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--navy);
          margin: 48px 0 14px;
          letter-spacing: -0.015em;
        }

        .language-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 28px 0 36px;
        }

        .lang-tag {
          font-family: 'Sora', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 7px 16px;
          border-radius: 24px;
          border: 1.5px solid;
          letter-spacing: 0.04em;
        }

        .lang-tag.navy {
          color: var(--navy);
          border-color: rgba(2,52,106,0.3);
          background: rgba(2,52,106,0.06);
        }

        .lang-tag.green {
          color: var(--green);
          border-color: rgba(51,145,28,0.35);
          background: rgba(51,145,28,0.07);
        }

        .lang-tag.teal {
          color: var(--teal);
          border-color: rgba(13,115,119,0.35);
          background: rgba(13,115,119,0.07);
        }

        .lang-tag.amber {
          color: #b87a00;
          border-color: rgba(232,160,32,0.4);
          background: rgba(232,160,32,0.08);
        }

        .pull-quote {
          border-left: 4px solid var(--amber);
          padding: 18px 24px;
          margin: 40px 0;
          background: #fff;
          border-radius: 0 10px 10px 0;
        }

        .pull-quote p {
          font-family: 'Sora', sans-serif;
          font-size: 1.08rem !important;
          font-weight: 600 !important;
          color: var(--navy) !important;
          line-height: 1.55 !important;
          margin: 0 !important;
          font-style: italic;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 24px 0 36px;
        }

        .industry-card {
          background: #fff;
          border: 1px solid var(--border);
          border-left: 3px solid var(--green);
          border-radius: 0 8px 8px 0;
          padding: 18px 18px 16px;
        }

        .industry-card:nth-child(2n) {
          border-left-color: var(--teal);
        }

        .industry-card:nth-child(3n) {
          border-left-color: var(--amber);
        }

        .industry-card:nth-child(4n) {
          border-left-color: var(--navy);
        }

        .industry-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy);
          margin-bottom: 7px;
        }

        .industry-card p {
          font-size: 0.85rem !important;
          color: var(--muted) !important;
          line-height: 1.6 !important;
          margin: 0 !important;
        }

        .deliver-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }

        .deliver-list li {
          font-size: 0.98rem;
          color: #2C3A52;
          padding: 11px 0 11px 22px;
          border-bottom: 1px solid var(--border);
          position: relative;
          line-height: 1.65;
        }

        .deliver-list li:last-child {
          border-bottom: none;
        }

        .deliver-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal);
        }

        .deliver-list li strong {
          color: var(--navy);
          font-weight: 600;
        }

        .stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 32px 0;
        }

        .stat-box {
          background: var(--navy);
          border-radius: 10px;
          padding: 22px 16px;
          text-align: center;
        }

        .stat-value {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--amber);
          display: block;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        footer {
          background: var(--navy-d);
          color: rgba(255,255,255,0.38);
          text-align: center;
          padding: 32px 5%;
          font-size: 0.76rem;
          letter-spacing: 0.02em;
        }

        footer span {
          color: var(--amber);
        }

        @media (max-width: 600px) {
          .industry-grid {
            grid-template-columns: 1fr;
          }
          .stat-row {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 1.65rem;
          }
        }
      `}</style>

      <div className="article-wrap">
        <div className="article-category">Audio &amp; Transcription</div>

        <h1>The Languages AI Still Cannot Hear — And How BDH Is Changing That</h1>

        <div className="article-divider"></div>

        <div className="article-body">
          <p>More than 2,000 languages are spoken across the African continent. Of those, a handful appear in major speech recognition benchmarks. Fewer still are represented with enough clean, labeled audio data to train a production-grade model. For the companies building the next generation of voice AI, healthcare NLP, fintech assistants, and call center automation, this is not a footnote — it is a structural gap in their model's ability to serve the world's fastest-growing markets.</p>

          <p>At Baraka Digital Hub, we sit at the center of that gap. Our transcription and annotation teams are native and fluent speakers of the languages that global AI pipelines routinely underserve. We collect, transcribe, translate, and label audio data at production scale — across accents, dialects, code-switching patterns, and noisy real-world environments — so that your models can actually work for the people they are supposed to serve.</p>

          <div className="pull-quote">
            <p>"A voice model trained only on clean, Western-accent audio will fail the moment it meets a Nairobi street, a Kampala call center, or an Addis Ababa hospital ward."</p>
          </div>

          <h2>The Languages We Work In</h2>

          <p>Our workforce spans native and fluent speakers across a wide range of East and Central African languages — including languages that sit at the frontier of AI underrepresentation:</p>

          <div className="language-cloud">
            <span className="lang-tag navy">Swahili</span>
            <span className="lang-tag green">Sheng</span>
            <span className="lang-tag teal">Kikuyu</span>
            <span className="lang-tag amber">Dholuo</span>
            <span className="lang-tag navy">Kamba</span>
            <span className="lang-tag green">Kalenjin</span>
            <span className="lang-tag teal">Luganda</span>
            <span className="lang-tag amber">Amharic</span>
            <span className="lang-tag navy">Oromo</span>
            <span className="lang-tag green">Somali</span>
            <span className="lang-tag teal">Tigrinya</span>
            <span className="lang-tag amber">Lingala</span>
            <span className="lang-tag navy">Hausa</span>
            <span className="lang-tag green">Yoruba</span>
            <span className="lang-tag teal">Zulu</span>
          </div>

          <p>Sheng deserves special mention. It is not a language that appears in any standard dataset — it is a fluid, generational urban creole spoken daily across Nairobi, blending Swahili, English, Kikuyu, Dholuo, and Sheng-specific coinages that evolve faster than any dictionary can track. Training a voice or text model to understand Sheng is not a data problem you can solve by scraping the web. It requires on-the-ground human expertise, and BDH has it.</p>

          <div className="stat-row">
            <div className="stat-box">
              <span className="stat-value">2,000+</span>
              <span className="stat-label">Languages spoken across Africa</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">&lt;1%</span>
              <span className="stat-label">Represented in major AI benchmarks</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">$1.5–8</span>
              <span className="stat-label">Per audio hour, depending on complexity</span>
            </div>
          </div>

          <h2>What We Actually Deliver</h2>

          <p>Our audio and transcription services go well beyond simple speech-to-text. We structure every engagement around what your model pipeline actually needs:</p>

          <ul className="deliver-list">
            <li><strong>Verbatim and clean-read transcription:</strong> Full verbatim output preserving fillers, false starts, and overlapping speech — or clean normalized transcripts for LLM training, depending on your task.</li>
            <li><strong>Speaker diarization labeling:</strong> Multi-speaker identification and turn-by-turn annotation for conversation modeling, meeting intelligence, and call center AI.</li>
            <li><strong>Accent and dialect tagging:</strong> Granular metadata labeling — region, dialect cluster, code-switching density — so your training data is stratified and your model learns variance, not just a single register.</li>
            <li><strong>Translation pairs:</strong> Source audio transcribed and translated into English or a target language, producing parallel corpora for machine translation and multilingual ASR fine-tuning.</li>
            <li><strong>Sentiment and intent annotation:</strong> Emotion labeling, intent classification, and topic tagging on transcribed audio — essential for voice-based customer experience and healthcare dialogue systems.</li>
            <li><strong>Audio quality scoring:</strong> SNR assessment, background noise classification, and recording condition tagging so your data pipeline can filter or weight samples appropriately.</li>
            <li><strong>Data collection:</strong> Scripted and spontaneous speech collection from native speakers across demographic cohorts — age, gender, region — for ground-up dataset creation.</li>
          </ul>

          <h2>Industries That Can Leverage This Today</h2>

          <p>The use cases for African-language audio data are not niche or future-facing — they are active commercial opportunities across multiple sectors right now:</p>

          <div className="industry-grid">
            <div className="industry-card">
              <div className="industry-title">Financial Services &amp; Fintech</div>
              <p>Voice-based KYC, loan application assistants, USSD replacement interfaces, and fraud detection systems all require models that understand how real customers in Nairobi, Kampala, or Addis Ababa actually speak — switching between Swahili and English mid-sentence, using informal register, and operating over low-quality mobile audio.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Healthcare &amp; Telemedicine</div>
              <p>Clinical documentation, patient intake automation, and diagnostic dialogue systems built for Sub-Saharan Africa need training data that reflects how patients describe symptoms — often in Dholuo, Kikuyu, or Amharic, not English. Mislabeled or absent language data here is not a product problem; it is a safety problem.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Telecommunications &amp; Call Centers</div>
              <p>East Africa's largest telcos handle millions of customer service interactions daily in mixed-language environments. Training ASR and intent classification models on real call center audio — including Sheng and code-switched Swahili — is the difference between a working IVR system and one that routes every caller to a human agent.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">AgriTech &amp; Rural Services</div>
              <p>Voice interfaces for smallholder farmers — delivering weather forecasts, market prices, and agronomic advice — must work in Kalenjin, Kamba, Luganda, and Oromo. Text-based alternatives simply do not reach this audience. Accurate ASR in these languages is a foundational infrastructure problem for the sector.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">EdTech &amp; Adaptive Learning</div>
              <p>Reading assessment tools, language tutoring systems, and adaptive curriculum platforms for African schools require speech recognition fine-tuned to children's voices, local curricula vocabulary, and national language policies that often mix Swahili with mother-tongue instruction in early grades.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Media, Journalism &amp; Broadcast</div>
              <p>Automatic subtitling, archive transcription, and content moderation for African broadcasters and streaming platforms operating in Amharic, Luganda, or Yoruba require both transcription accuracy and cultural context that no general-purpose ASR model currently provides reliably.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Legal &amp; Government Services</div>
              <p>Court transcription, public consultation documentation, and civic tech applications serving multilingual populations depend on accurate records across official and vernacular languages. In Kenya alone, proceedings routinely shift between English, Swahili, and the mother tongue of witnesses or defendants.</p>
            </div>

            <div className="industry-card">
              <div className="industry-title">Automotive &amp; Consumer Devices</div>
              <p>In-vehicle voice assistants and smart home devices entering African markets cannot rely on US or UK English acoustic models. Localizing wake-word detection, command recognition, and conversational interfaces to East African English accents and Swahili is a prerequisite for market viability.</p>
            </div>
          </div>

          <h2>Why BDH — Not a General Crowdsourcing Platform</h2>

          <p>General-purpose transcription platforms can handle English. Some handle French or Spanish with reasonable accuracy. But for Sheng, Swahili, Kikuyu, Dholuo, Kalenjin, or Oromo, there is no off-the-shelf solution — because there is no large existing workforce of vetted, quality-checked native speakers available on demand through a global gig platform.</p>

          <p>BDH is different by design. Our delivery center in Nairobi gives us direct access to a multilingual workforce that lives inside these language communities. Our annotators are not transcribing a foreign language from a style guide — they are native speakers who understand register, code-switching norms, generational vocabulary shifts, and the acoustic reality of how these languages sound in markets, hospitals, classrooms, and call centers.</p>

          <p>Every transcription project at BDH runs through structured quality governance: inter-annotator agreement checks, blind consensus review, and systematic rejection of low-quality source audio before it contaminates your training set. We do not just return text files — we return clean, structured, audit-ready datasets with the metadata your pipeline needs to use them effectively.</p>

          <div className="pull-quote">
            <p>"The most valuable training data is not the easiest to collect. It is the data that reflects how real people actually communicate — in the languages, accents, and contexts that matter to your market."</p>
          </div>

          <h2>Getting Started</h2>

          <p>Whether you are building a multilingual ASR model from scratch, fine-tuning an existing foundation model for an African market, or simply filling a gap in your training corpus, BDH can scope and execute a pilot project rapidly. We work within your preferred annotation platform — Label Studio, Encord, SuperAnnotate, or Labelbox — or deliver structured outputs directly in your required format.</p>

          <p>Reach out to discuss your language requirements and data volumes: <strong>projects@barakadigitalhub.com</strong></p>
        </div>
      </div>

      <footer>
        © 2026 <span>Baraka Digital Hub</span> · Nairobi, Kenya · projects@barakadigitalhub.com
      </footer>
    </>
  );
}
