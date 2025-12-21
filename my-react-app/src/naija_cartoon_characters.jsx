import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NaijaCartoonCharacters = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const characters = [
    {
      name: "Cece",
      title: "The Naija Babe",
      profile: "Typical naija babe who loves money. She's a talented hairdresser and Victor's girlfriend.",
      traits: ["Money lover", "Hairdresser", "Fashion conscious", "Ambitious"],
      colors: {
        skin: "#8B6F47",
        hair: "#1a1a1a",
        outfit: "#FF1493",
        accent: "#FFD700"
      },
      style: "Long braids or wigs, tight dress, designer bag, always glamorous",
      detailedLook: {
        face: "Oval face with high cheekbones, almond-shaped brown eyes with long dramatic lashes, arched eyebrows, full glossy lips with pink lipstick, small nose",
        hair: "Long black synthetic braids reaching mid-back, sometimes switches to colorful wigs (burgundy, blonde highlights), always styled with baby hair laid",
        body: "Slim hourglass figure, average height (5'5\"), graceful posture, manicured long nails (usually pink or gold)",
        outfit: "Tight-fitting bodycon dress in hot pink, off-shoulder style, mini length showing legs, gold statement necklace, large gold hoop earrings, designer-looking handbag (clutch or crossbody), pointed heels in gold or nude",
        accessories: "Multiple gold bangles, expensive-looking sunglasses on head, smartphone with rhinestone case, always carrying a hand mirror",
        expression: "Confident smirk, sassy attitude in eyes, one hand often on hip, head slightly tilted"
      }
    },
    {
      name: "Victor",
      title: "The Humble Graduate",
      profile: "Humble, caring and loving but also dramatic and fun. A broke graduate working at a filling station.",
      traits: ["Humble", "Dramatic", "Fun-loving", "Hardworking"],
      colors: {
        skin: "#6B5742",
        hair: "#0a0a0a",
        outfit: "#4169E1",
        accent: "#FF6347"
      },
      style: "Simple shirt, jeans, sneakers, filling station uniform, honest smile",
      detailedLook: {
        face: "Round friendly face, large expressive brown eyes, thick eyebrows, warm genuine smile showing teeth, medium-sized nose, slight stubble on chin",
        hair: "Short low-cut black hair, neatly trimmed, clean hairline, simple and maintained",
        body: "Lean athletic build, tall (5'10\"), straight posture despite struggles, working man's hands",
        outfit: "Royal blue work shirt with 'PETROL' or gas station logo on chest pocket, khaki or dark blue work pants, worn-out black sneakers or work boots, sleeves sometimes rolled up to elbows",
        accessories: "Simple wristwatch (not expensive), work ID badge hanging from neck, small cross necklace, old Nokia or basic smartphone in pocket, sometimes holding a rag or fuel nozzle",
        expression: "Warm smile that reaches eyes, hopeful look despite hardship, expressive eyebrows when being dramatic, open body language"
      }
    },
    {
      name: "Cynthia",
      title: "The Party Queen",
      profile: "Cece's wild best friend who loves party life. Owns a big shopping mall courtesy of Alhaji.",
      traits: ["Wild", "Party lover", "Rich", "Influencer"],
      colors: {
        skin: "#9B7653",
        hair: "#4B0082",
        outfit: "#32CD32",
        accent: "#FF69B4"
      },
      style: "Expensive clothes, colored hair, designer everything, always camera-ready",
      detailedLook: {
        face: "Heart-shaped face, cat-eye shaped eyes with dramatic makeup, winged eyeliner, contoured cheeks with heavy blush, glossy lips (bright pink), perfectly shaped eyebrows",
        hair: "Long wavy colored wig (purple, blue, or burgundy with highlights), full volume, reaches below shoulders, sometimes in high ponytail with edges laid",
        body: "Curvy figure (exaggerated proportions), medium height (5'6\"), confident stance, walks with bounce",
        outfit: "Tight crop top in lime green showing midriff, high-waisted ripped jeans or leather pants, designer belt with big logo buckle, expensive heels (red bottoms style), designer jacket draped over shoulders",
        accessories: "Multiple designer bags (often carrying latest iPhone), large designer sunglasses (even indoors), layered gold chains, big designer earrings, smart watch, ring light for selfies, bottle of expensive drink",
        expression: "Playful mischievous smile, one eyebrow raised, often posing for photos, peace sign or duckface, always ready for camera"
      }
    },
    {
      name: "Samuel",
      title: "The Fraudstar",
      profile: "Rich yahoo boy who drives a Lexus and always dresses in designers. Loves spending money on girls.",
      traits: ["Flashy", "Rich", "Smooth talker", "Show-off"],
      colors: {
        skin: "#705842",
        hair: "#000000",
        outfit: "#8B0000",
        accent: "#FFD700"
      },
      style: "Designer clothes, gold chains, expensive watches, Lexus keys always visible",
      detailedLook: {
        face: "Angular face with sharp jawline, narrow eyes with confident gaze, thin styled eyebrows, cocky smile showing gold teeth (one front tooth), small trimmed beard and mustache",
        hair: "Trendy fade haircut with designed patterns on sides, top styled with waves or dreads, well-maintained edges, sometimes colored tips",
        body: "Medium build with slight muscles, average to tall height (5'9\"), swagger in posture, chest out walk",
        outfit: "Red designer tracksuit (Gucci-style) with logo patterns, or designer polo with collar popped, ripped designer jeans, expensive sneakers (Balenciaga or Yeezy style), designer belt with big buckle",
        accessories: "Multiple thick gold chains (3-4 layers), heavy gold watch, diamond stud earrings, designer sunglasses, Lexus car keys prominently displayed, latest iPhone Pro Max, designer backpack, rings on multiple fingers",
        expression: "Smug confident smile, one eyebrow raised, often holding money or phone, pointing gesture, head tilted back in confidence"
      }
    },
    {
      name: "Uncle-T",
      title: "The Sugar Daddy",
      profile: "Older man in his late 40s who likes Cece. Drives a Toyota Camry. Always causing trouble between Cece and Victor.",
      traits: ["Persistent", "Wealthy", "Middle-aged", "Troublemaker"],
      colors: {
        skin: "#6B5742",
        hair: "#696969",
        outfit: "#2F4F4F",
        accent: "#DAA520"
      },
      style: "Business casual, pot belly, car keys, mature look, greying hair",
      detailedLook: {
        face: "Rectangular mature face with slightly sagging cheeks, small calculating eyes, receding hairline, thin lips with knowing smile, wrinkles around eyes and forehead",
        hair: "Short hair with grey patches at temples, thinning on top, some grey in sideburns, neat but showing age",
        body: "Stocky build with noticeable pot belly, broad shoulders, average height (5'8\"), mature posture, walks with authority",
        outfit: "Dark green or grey senator/native wear (agbada) or business casual - tucked-in polo shirt showing belly, dress pants with belt, brown leather shoes, sometimes blazer over shoulders",
        accessories: "Gold wristwatch (not too flashy but expensive), Toyota Camry car keys always visible, reading glasses hanging from neck or on head, leather wallet visible in back pocket, simple gold ring, mobile phone with pouch",
        expression: "Sly smile with one side of mouth higher, knowing look in eyes, hand often in pocket holding money, leaning posture when talking to younger women"
      }
    },
    {
      name: "Mama Viki",
      title: "The Wise Mother",
      profile: "Victor's elderly mother in her late 50s. She loves her son deeply and always gives him life advice.",
      traits: ["Wise", "Loving", "Traditional", "Supportive"],
      colors: {
        skin: "#8B7355",
        hair: "#A9A9A9",
        outfit: "#800080",
        accent: "#FFA500"
      },
      style: "Traditional wrapper and blouse, headtie, comfortable shoes, warm smile",
      detailedLook: {
        face: "Round maternal face, warm brown eyes with crow's feet, soft gentle smile showing warmth, full cheeks, small nose, kind expression with wisdom in eyes",
        hair: "Short grey/salt-and-pepper hair, usually covered by headtie (gele), natural texture, neat and simple",
        body: "Full-figured motherly build, average height (5'4\"), comfortable posture, gentle movements, soft appearance",
        outfit: "Traditional purple wrapper (ankara fabric) tied at waist, matching blouse with puffy sleeves, elaborate headtie (gele) in orange or matching purple, wrapper often has traditional Nigerian patterns",
        accessories: "Simple gold earrings (studs), coral bead necklace, matching wrapper and blouse set, flat comfortable shoes or slippers, small purse tied in wrapper, reading glasses on chain around neck, prayer beads",
        expression: "Warm motherly smile, gentle eyes that show love and concern, hands often clasped together or open for embrace, head tilted when listening, nodding gesture when giving advice"
      }
    }
  ];

  const currentChar = characters[currentCharacter];

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-white to-green-600 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-green-800 mb-2">
            🎬 Wahala Vibes Cartoon Characters
          </h1>
          <p className="text-xl text-gray-700">Meet the Cast</p>
        </div>

        {/* Character Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Character Illustration */}
            <div 
              className="relative h-96 md:h-auto flex items-center justify-center p-8"
              style={{ 
                background: `linear-gradient(135deg, ${currentChar.colors.accent}33, ${currentChar.colors.outfit}33)`
              }}
            >
              <div className="relative">
                {/* Cartoon Character Representation */}
                <div className="w-64 h-80 relative">
                  {/* Head */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-40 rounded-full"
                    style={{ backgroundColor: currentChar.colors.skin }}
                  >
                    {/* Eyes */}
                    <div className="absolute top-16 left-6 w-4 h-4 bg-white rounded-full">
                      <div className="w-2 h-2 bg-black rounded-full ml-1 mt-1"></div>
                    </div>
                    <div className="absolute top-16 right-6 w-4 h-4 bg-white rounded-full">
                      <div className="w-2 h-2 bg-black rounded-full ml-1 mt-1"></div>
                    </div>
                    
                    {/* Nose */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-black opacity-30 rounded-full"></div>
                    
                    {/* Mouth */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-4 border-black rounded-b-full"></div>
                  </div>

                  {/* Hair */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-20 rounded-t-full"
                    style={{ backgroundColor: currentChar.colors.hair }}
                  ></div>

                  {/* Body */}
                  <div 
                    className="absolute top-36 left-1/2 transform -translate-x-1/2 w-40 h-44 rounded-t-3xl"
                    style={{ backgroundColor: currentChar.colors.outfit }}
                  >
                    {/* Accent detail */}
                    <div 
                      className="absolute bottom-0 w-full h-8"
                      style={{ backgroundColor: currentChar.colors.accent }}
                    ></div>
                  </div>
                </div>

                {/* Character Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-4 border-green-500">
                  <span className="font-bold text-green-800">{currentChar.name}</span>
                </div>
              </div>
            </div>

            {/* Character Info */}
            <div className="p-8 bg-gradient-to-br from-white to-green-50">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{currentChar.name}</h2>
              <p className="text-xl text-green-600 font-semibold mb-4">{currentChar.title}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-700 mb-2">Profile:</h3>
                <p className="text-gray-600 leading-relaxed">{currentChar.profile}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-700 mb-2">Character Traits:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentChar.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Visual Style:</h3>
                <p className="text-gray-600 italic">{currentChar.style}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={prevCharacter}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Character Dots */}
          <div className="flex gap-2">
            {characters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCharacter(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCharacter 
                    ? 'bg-green-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCharacter}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Character Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {characters.map((char, index) => (
            <button
              key={index}
              onClick={() => setCurrentCharacter(index)}
              className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
                index === currentCharacter 
                  ? 'bg-green-600 text-white shadow-xl' 
                  : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">
                  {index === 0 ? '💁‍♀️' : index === 1 ? '👨' : index === 2 ? '💃' : index === 3 ? '🕴️' : index === 4 ? '👔' : '👵'}
                </div>
                <p className="font-bold text-sm">{char.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-green-600 mb-4">🎨 Cartoon Style Guide</h3>
          <div className="text-left max-w-4xl mx-auto space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Overall Art Style:</h4>
              <p className="text-gray-700">
                <strong>Semi-realistic cartoon with Nigerian cultural authenticity.</strong> Think of a style similar to modern African animation 
                (like "Iwájú" or "Iyanu") mixed with the expressiveness of popular web animations. The style should be:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-green-800 mb-2">✨ Visual Characteristics:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Line work:</strong> Clean, smooth outlines with varying thickness for depth</li>
                  <li>• <strong>Colors:</strong> Vibrant, saturated colors with cel-shading (2-3 tone shading)</li>
                  <li>• <strong>Proportions:</strong> Slightly exaggerated features - larger eyes, expressive faces</li>
                  <li>• <strong>Anatomy:</strong> Semi-realistic body proportions with stylized details</li>
                  <li>• <strong>Textures:</strong> Fabric patterns visible, hair texture defined</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-800 mb-2">🎭 Animation Style:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Expressions:</strong> Highly expressive faces with exaggerated emotions</li>
                  <li>• <strong>Movement:</strong> Fluid with squash and stretch principles</li>
                  <li>• <strong>Comedy:</strong> Visual gags, reaction shots, speed lines for emphasis</li>
                  <li>• <strong>Cultural elements:</strong> Nigerian gestures, body language authentic</li>
                  <li>• <strong>Background:</strong> Detailed Lagos/Nigerian urban settings</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h5 className="font-bold text-yellow-800 mb-2">🌍 Consistency Rules for All Characters:</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All characters have the same eye style - large, expressive, almond-shaped with visible iris and pupil</li>
                <li>• Noses are simple, usually shown from 3/4 view as small triangular or rounded shapes</li>
                <li>• Mouths are expressive with visible teeth when smiling (Samuel has gold tooth detail)</li>
                <li>• Hair has texture definition - braids show individual strands, natural hair shows coils</li>
                <li>• Hands have 4 fingers (cartoon standard) with detailed nails for female characters</li>
                <li>• Clothing shows fabric folds and patterns, especially for traditional wear</li>
                <li>• Shadows use warm tones (not grey) to maintain vibrant color palette</li>
                <li>• All characters cast soft shadows beneath feet for grounding</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-4">
              <h5 className="font-bold text-purple-800 mb-2">📏 Size Comparison Reference:</h5>
              <p className="text-sm text-gray-700">
                <strong>Height order (tallest to shortest):</strong> Victor (5'10") → Samuel (5'9") → Uncle-T (5'8") → 
                Cynthia (5'6") → Cece (5'5") → Mama Viki (5'4")
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Build comparison:</strong> Victor (lean athletic) • Samuel (medium with muscle) • Uncle-T (stocky with belly) • 
                Cynthia (curvy exaggerated) • Cece (slim hourglass) • Mama Viki (full-figured maternal)
              </p>
            </div>

            <p className="text-gray-600 text-sm italic mt-4">
              💡 <strong>Designer Note:</strong> This detailed breakdown ensures all animators and illustrators can maintain 
              consistent character designs across episodes, merchandise, and promotional materials. The style balances modern 
              animation appeal with authentic Nigerian cultural representation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaijaCartoonCharacters;