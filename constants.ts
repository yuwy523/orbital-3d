
import { PlanetData } from './types';

// ==========================================
// 如何使用本地圖片 (Local Images Guide)
// ==========================================
// 1. 在專案根目錄建立一個名為 'public' 的資料夾。
// 2. 將圖片放入其中，例如 'public/earth.jpg'。
// 3. 將下方的 texture URL 改為 'earth.jpg' (不帶斜線)。
//    Vite + base: './' 會自動解析為相對路徑。
// ==========================================

// Realism Update (Scaled Down):
// To fix rendering artifacts (shadows, lighting), we reduce the absolute numbers 
// while keeping the RELATIVE ratios strictly realistic.
//
// New Scale Reference:
// Earth Radius = 0.1 (Base Unit)
// Sun Radius = 11 (110x Earth -> Realism)
// 1 AU = 2,500 (227x Sun Radius -> Realism is ~215x)
// Moon Orbit = 6 (60x Earth Radius -> Realism)
//
// Max Distance (Neptune) = 30 AU = 75,000 units (Manageable for WebGL)
//
export const PLANETS: PlanetData[] = [
  {
    id: 'sun',
    name: '太陽 (Sun)',
    color: '#FFC000', 
    texture: 'sun.jpg', 
    ringTexture: '',
    radius: 11, // 110x Earth
    orbitRadius: 0,
    eccentricity: 0,
    orbitAngle: 0,
    inclination: 0,
    axialTilt: 7.25,
    period: 0,
    rotationPeriod: '27 天',
    rotationSpeed: 0.037, 
    description: '太陽是位於我們系統中心的黃矮星，佔據了太陽系 99.86% 的質量。它由熾熱的電漿組成，核心溫度高達 1500 萬度，持續進行著將氫融合成氦的核反應。這些能量以光和熱的形式向外輻射，驅動著地球的氣候系統與光合作用。太陽並非固體，不同緯度的自轉速度不同（差動自轉），這導致其磁場線不斷糾纏，形成太陽黑子、閃焰與日冕物質拋射等劇烈活動。',
    observationInfo: '【嚴重警告】絕對不可用肉眼或未加裝專業濾鏡的器材直視太陽，否則將導致永久性失明。安全的觀測方式包括：1. 使用合格的太陽觀測眼鏡。 2. 使用針孔投影法將影像投射在白紙上。 3. 使用裝有巴德膜（Baader Film）或赫歇爾稜鏡的天文望遠鏡，可見光球層上的黑子結構。',
    realDistanceAU: 0,
    type: 'star',
    moons: 0,
    magnitude: '-26.74 (絕對)',
    temperature: '5,500°C (表面)',
    volume: '130 萬 x 地球',
    mass: '33.3 萬 x 地球',
    gravity: '274 m/s² (28G)'
  },
  {
    id: 'mercury',
    name: '水星 (Mercury)',
    color: '#A5A5A5',
    texture: 'mercury.jpg', 
    ringTexture: '',
    radius: 0.038, // 0.38x Earth
    orbitRadius: 975, // 0.39 AU * 2500
    eccentricity: 0.205, 
    orbitAngle: 29, 
    inclination: 6.34, 
    axialTilt: 0.03,
    period: 0.24,
    rotationPeriod: '58.6 天',
    rotationSpeed: 0.017, 
    description: '水星是太陽系最小且最靠近太陽的行星。它幾乎沒有大氣層來保留熱量，導致晝夜溫差極端劇烈（白天攝氏 430 度，夜晚降至零下 180 度）。其表面布滿了密密麻麻的隕石坑，外觀與月球極為相似，但水星擁有一個異常巨大的鐵質核心，約佔其體積的 85%，使其成為太陽系中密度第二高的行星。',
    observationInfo: '水星常年淹沒在太陽的耀眼光芒中，是「金木水火土」五星中最難觀測的一顆。最佳時機是在「東大距」（日落後西方低空）或「西大距」（日出前東方低空）的前後幾天。透過天文望遠鏡，可以看出它像月球一樣有盈虧變化，但難以看到表面細節。',
    realDistanceAU: 0.39,
    type: 'terrestrial',
    moons: 0,
    magnitude: '最亮: -2.48 / 平均: 0.23',
    temperature: '-173°C ~ 427°C',
    volume: '0.056 x 地球',
    mass: '0.055 x 地球',
    gravity: '3.7 m/s² (0.38G)'
  },
  {
    id: 'venus',
    name: '金星 (Venus)',
    color: '#FFC649', 
    texture: 'venus.jpg', 
    ringTexture: '',
    radius: 0.095, // 0.95x Earth
    orbitRadius: 1800, // 0.72 AU * 2500
    eccentricity: 0.007, 
    orbitAngle: 55,
    inclination: 2.19, 
    axialTilt: 177.3, 
    period: 0.62,
    rotationPeriod: '4 天 (大氣超自轉)',
    // Correction:
    // Body rotation is 243 days (very slow, 0.004).
    // Atmosphere rotation is ~4 days (fast).
    // Since the texture displays CLOUDS, we must use the atmospheric speed for visual realism.
    // 24 hours (Earth) = 1.0. 
    // 4 days = 96 hours. 24/96 = 0.25.
    rotationSpeed: 0.25, 
    description: '金星常被稱為地球的「姊妹星」，但環境截然不同。其轉軸傾角高達 177.3 度，意味著它是「倒著轉」的（逆行自轉）。雖然金星的岩石表面自轉極慢（243 天一圈），但其濃厚的大氣層卻以驚人的速度旋轉，僅需 4 天就能繞行行星一圈，這種現象稱為「大氣超自轉」。本模型為了符合視覺貼圖（雲層），呈現的是大氣層的旋轉速度。',
    observationInfo: '金星是全天最亮的行星，古稱「太白金星」。當它位於太陽西側時稱為「啟明」（晨星），位於東側時稱為「長庚」（昏星）。使用雙筒望遠鏡即可輕易觀察到它的相位變化（如眉月狀或半月狀），這是伽利略當年證明「日心說」的關鍵證據之一。',
    realDistanceAU: 0.72,
    type: 'terrestrial',
    moons: 0,
    magnitude: '最亮: -4.92 / 平均: -4.14',
    temperature: '462°C (平均)',
    volume: '0.86 x 地球',
    mass: '0.815 x 地球',
    gravity: '8.87 m/s² (0.9G)'
  },
  {
    id: 'earth',
    name: '地球 (Earth)',
    color: '#1B68E3', 
    texture: 'earth.jpg', 
    ringTexture: '',
    cloudTexture: 'earth_clouds.jpg',
    radius: 0.1, // Base Unit
    orbitRadius: 2500, // 1 AU = 2500
    eccentricity: 0.017, 
    orbitAngle: 102,
    inclination: 1.57, 
    axialTilt: 23.4,
    period: 1.0,
    rotationPeriod: '23.9 小時',
    rotationSpeed: 1.0, 
    description: '地球是太陽系中唯一已知擁有表面液態水與生命的行星。其獨特之處在於活躍的板塊構造，這不僅塑造了山脈與海洋，還參與了碳循環，調節了長期氣候。地球的大氣層含有 21% 的氧氣，這是數十億年生物光合作用的結果。強大的磁場（磁層）保護了我們免受太陽風與宇宙射線的直接轟擊。',
    observationInfo: '除了腳下的大地，我們可以透過觀察「地照」（Earthshine）來間接感受地球。當月球呈現細眉月時，其暗部會被地球反射的陽光微微照亮，呈現出一種幽暗的古銅色，這顯示了地球是一顆高反照率的明亮行星。',
    realDistanceAU: 1.0,
    type: 'terrestrial',
    moons: 1,
    magnitude: 'N/A (觀測點)',
    temperature: '-89°C ~ 56.7°C',
    volume: '1.08 x 10¹² km³',
    mass: '5.97 x 10²⁴ kg',
    gravity: '9.8 m/s² (1G)'
  },
  {
    id: 'moon',
    parentId: 'earth',
    name: '月球 (Moon)',
    color: '#D3D3D3', // Light Grey 
    texture: 'moon.jpg', 
    ringTexture: '',
    radius: 0.027, // 0.27x Earth
    orbitRadius: 6, // Realism: 60x Earth Radius (0.1 * 60 = 6)
    eccentricity: 0.0549, 
    orbitAngle: 0, 
    inclination: 5.145, 
    axialTilt: 6.68, 
    period: 0.0748, 
    rotationPeriod: '27.3 天 (同步自轉)',
    rotationSpeed: 0.0366, 
    description: '月球是地球唯一的天然衛星，也是人類唯一踏足過的地外天體。它是一顆分化的岩石星球，表面布滿了撞擊坑與古老的火山熔岩平原（月海）。由於缺乏大氣與地質活動，月球忠實地記錄了太陽系早期的撞擊歷史。其引力牽引是地球海洋產生潮汐的主要原因，同時也穩定了地球的自轉軸傾角。',
    observationInfo: '觀測月球的最佳時機是「上弦」或「下弦」期間，而非滿月。此時陽光側面照射，在晨昏線（明暗交界處）附近會投下長長的影子，透過雙筒或小型望遠鏡，可以極為清晰地看到環形山的立體結構、山脈的高度以及月溪（乾涸的熔岩河道）。',
    realDistanceAU: 0.00257,
    type: 'moon',
    moons: 0,
    magnitude: '滿月: -12.74',
    temperature: '-173°C ~ 117°C',
    volume: '0.02 x 地球',
    mass: '0.012 x 地球',
    gravity: '1.62 m/s² (0.16G)'
  },
  {
    id: 'mars',
    name: '火星 (Mars)',
    color: '#D6341A', 
    texture: 'mars.jpg',
    ringTexture: '',
    radius: 0.053, // 0.53x Earth
    orbitRadius: 3800, // 1.52 AU * 2500
    eccentricity: 0.094, 
    orbitAngle: 286,
    inclination: 1.67, 
    axialTilt: 25.2,
    period: 1.88,
    rotationPeriod: '24.6 小時',
    rotationSpeed: 0.97, 
    description: '火星是一顆寒冷的沙漠行星，因地表廣泛分布氧化鐵（鐵鏽）而呈現紅色。它擁有太陽系最高的火山「奧林帕斯山」（高約 25 公里）與最長的峽谷「水手號峽谷」。雖然現在大氣稀薄（不到地球的 1%），但地表乾涸的河床與礦物證據顯示，遠古火星曾擁有溫暖濕潤的氣候，甚至可能有浩瀚的海洋。',
    observationInfo: '每兩年兩個月一次的「火星衝」是觀測良機。在視寧度（大氣穩定度）良好時，使用口徑 10 公分以上的望遠鏡，可以看見其白色的極冠（乾冰與水冰）以及深色的地表特徵（如大瑟提斯高原）。若運氣不好遇上全球性沙塵暴，表面細節則會消失。',
    realDistanceAU: 1.52,
    type: 'terrestrial',
    moons: 2,
    magnitude: '最亮: -2.91 / 平均: -0.5',
    temperature: '-143°C ~ 35°C',
    volume: '0.15 x 地球',
    mass: '0.11 x 地球',
    gravity: '3.72 m/s² (0.38G)'
  },
  {
    id: 'jupiter',
    name: '木星 (Jupiter)',
    color: '#D15C21',
    texture: 'jupiter.jpg', 
    ringTexture: '',
    radius: 1.12, // 11.2x Earth
    orbitRadius: 13000, // 5.2 AU * 2500
    eccentricity: 0.049,
    orbitAngle: 274,
    inclination: 0.32, 
    axialTilt: 3.1,
    period: 11.86,
    rotationPeriod: '9.9 小時',
    rotationSpeed: 2.41, 
    description: '木星是太陽系最大的行星，質量是其他所有行星總和的 2.5 倍，主要由氫和氦組成。它沒有固體表面，大氣層下是深不見底的液態金屬氫海洋，產生了巨大的磁場。木星表面色彩斑斕的條紋是高速反向流動的風帶，而標誌性的「大紅斑」則是一個已經存在數百年的巨型反氣旋風暴，大到足以吞噬整個地球。',
    observationInfo: '木星是夜空中最容易觀測的目標之一。使用 7x50 的雙筒望遠鏡，就能看到身旁四顆排列成線的亮點，即「伽利略衛星」。透過天文望遠鏡，可以清晰看到木星盤面上的深色條紋（Belts）與淺色區域（Zones），在大氣穩定時甚至能分辨出大紅斑的顏色。',
    realDistanceAU: 5.20,
    type: 'gas',
    moons: 97,
    magnitude: '最亮: -2.94 / 平均: -2.2',
    temperature: '-108°C (平均)',
    volume: '1,321 x 地球',
    mass: '318 x 地球',
    gravity: '24.79 m/s² (2.5G)'
  },
  {
    id: 'io',
    parentId: 'jupiter',
    name: '木衛一 (Io)',
    color: '#FFFACD', // Pale Yellow (LemonChiffon)
    texture: 'io.jpg', 
    ringTexture: '',
    radius: 0.029, // ~0.28x Earth (Slightly larger than Moon 0.027)
    orbitRadius: 6.57, // ~421,700 km. Ratio 1.09 vs Moon (6.0)
    eccentricity: 0.0041, 
    orbitAngle: 0, 
    inclination: 0.04, // Corrected: 0.04 deg to Jupiter equator
    axialTilt: 0, // Corrected: 0 deg
    period: 0.0048, // 1.77 Days
    rotationPeriod: '1.77 天 (同步)',
    rotationSpeed: 0.56, 
    description: '木衛一（Io）是太陽系中火山活動最劇烈的天體。受到木星巨大的引力以及外側木衛二、木衛三的軌道共振影響，其內部不斷受到潮汐力的拉扯與摩擦，產生極高的熱能。這導致其表面遍布數百座活火山，噴發出的硫磺與二氧化硫羽流可高達 500 公里，將地表染成鮮豔的黃色、橙色與紅色，且地貌變化極快。',
    observationInfo: '在小型望遠鏡中，木衛一是一個緊貼木星的小亮點。它的特點是移動速度極快，公轉週期僅 1.77 天。在幾個小時的觀測期間內，你就能明顯察覺它相對於木星的位置發生了改變。它是觀測「木衛互食」現象的最佳目標。',
    realDistanceAU: 0.0028,
    type: 'moon',
    moons: 0,
    magnitude: '5.0 (衝時)',
    temperature: '-130°C ~ 1600°C (火山口)',
    volume: '0.015 x 地球',
    mass: '0.015 x 地球',
    gravity: '1.79 m/s² (0.18G)'
  },
  {
    id: 'europa',
    parentId: 'jupiter',
    name: '木衛二 (Europa)',
    color: '#FFFFF0', // Very pale yellowish-white (Ivory)
    texture: 'europa.jpg', 
    ringTexture: '',
    radius: 0.025, // ~0.24x Earth (Smaller than Moon)
    orbitRadius: 10.48, // ~671,100 km. Ratio 1.74 vs Moon
    eccentricity: 0.009, 
    orbitAngle: 45, 
    inclination: 0.46, // Corrected: 0.46 deg to Jupiter equator
    axialTilt: 0.1, // Corrected: 0.1 deg
    period: 0.0097, // 3.55 Days
    rotationPeriod: '3.55 天 (同步)',
    rotationSpeed: 0.28, 
    description: '木衛二（Europa）表面異常光滑，覆蓋著一層厚厚的冰殼，幾乎沒有隕石坑。科學家有強烈證據顯示，在冰層之下存在一個深邃的全球性鹹水海洋，其水量甚至比地球所有海洋的總和還多。這個地下海洋由潮汐加熱維持液態，並可能與海底岩石發生化學反應，是尋找地外生命最有希望的地方之一。',
    observationInfo: '木衛二在望遠鏡中呈現為白色的微弱星點。由於其表面由水冰組成，反照率極高（約 0.64）。當它經過木星盤面（凌木）時，在大口徑望遠鏡下有時難以分辨，但其投下的黑色影子則相對容易被看到。',
    realDistanceAU: 0.0045,
    type: 'moon',
    moons: 0,
    magnitude: '5.3 (衝時)',
    temperature: '-160°C (表面)',
    volume: '0.015 x 地球',
    mass: '0.008 x 地球',
    gravity: '1.31 m/s² (0.13G)'
  },
  {
    id: 'ganymede',
    parentId: 'jupiter',
    name: '木衛三 (Ganymede)',
    color: '#C7B299', // Light brownish-grey
    texture: 'ganymede.jpg', 
    ringTexture: '',
    radius: 0.041, // ~0.41x Earth (Largest Moon, bigger than Mercury)
    orbitRadius: 16.7, // ~1,070,400 km. Ratio 2.78 vs Moon
    eccentricity: 0.0013, 
    orbitAngle: 90, 
    inclination: 0.18, // Corrected: 0.18 deg to Jupiter equator
    axialTilt: 0.2, // Corrected: 0.2 deg
    period: 0.0196, // 7.15 Days
    rotationPeriod: '7.15 天 (同步)',
    rotationSpeed: 0.14, 
    description: '木衛三（Ganymede）是太陽系中體積最大的衛星，直徑甚至超過了水星。它是唯一已知擁有自己磁圈的衛星，這意味著其內部擁有一個活躍的熔融鐵核。其表面混合了兩種地形：布滿撞擊坑的古老暗區，以及由構造活動形成的年輕明亮槽溝，顯示其過去曾經歷過劇烈的地殼變動。',
    observationInfo: '木衛三是四顆伽利略衛星中最亮的一顆（約 4.6 等）。若視力極佳且環境極黑，理論上肉眼可見，但通常被木星的光芒淹沒。使用望遠鏡觀測時，它是最容易辨識的衛星。在專業的高倍率天文攝影中，甚至能拍出其表面的明暗斑塊。',
    realDistanceAU: 0.0071,
    type: 'moon',
    moons: 0,
    magnitude: '4.6 (衝時)',
    temperature: '-163°C (平均)',
    volume: '0.07 x 地球',
    mass: '0.025 x 地球',
    gravity: '1.42 m/s² (0.14G)'
  },
  {
    id: 'callisto',
    parentId: 'jupiter',
    name: '木衛四 (Callisto)',
    color: '#696969', // Dark grey
    texture: 'callisto.jpg', 
    ringTexture: '',
    radius: 0.038, // ~0.37x Earth (Similar to Mercury)
    orbitRadius: 29.4, // ~1,882,700 km. Ratio 4.89 vs Moon
    eccentricity: 0.0074, 
    orbitAngle: 180, 
    inclination: 0.28, // Corrected: 0.28 deg to Jupiter equator
    axialTilt: 0, // Corrected: 0 deg
    period: 0.0457, // 16.69 Days
    rotationPeriod: '16.7 天 (同步)',
    rotationSpeed: 0.06, 
    description: '木衛四（Callisto）距離木星最遠，受到的潮汐力極小。它是一顆地質活動已經死寂的星球，表面布滿了密密麻麻的隕石坑，被認為是太陽系中最古老的地表之一，幾乎完整保留了 40 億年來的轟擊歷史。它可能擁有一個未完全分化的內部結構，即岩石與冰混合在一起，沒有形成明顯的地核。',
    observationInfo: '木衛四的亮度較暗（約 5.6 等），但仍在此雙筒望遠鏡的可見範圍內。由於其軌道半徑很大，它在木星兩側擺動的幅度也最大。在觀測時，它經常孤懸於木星遠處，需要對照星圖確認它不是背景恆星。觀察它完成一圈公轉需要半個多月。',
    realDistanceAU: 0.012,
    type: 'moon',
    moons: 0,
    magnitude: '5.6 (衝時)',
    temperature: '-139°C (平均)',
    volume: '0.054 x 地球',
    mass: '0.018 x 地球',
    gravity: '1.23 m/s² (0.12G)'
  },
  {
    id: 'saturn',
    name: '土星 (Saturn)',
    color: '#EDD19C',
    texture: 'saturn.jpg', 
    ringTexture: '', 
    radius: 0.94, // 9.4x Earth
    orbitRadius: 23750, // 9.5 AU * 2500
    eccentricity: 0.057,
    orbitAngle: 339,
    inclination: 0.93, 
    axialTilt: 26.7,
    period: 29.46,
    rotationPeriod: '10.7 小時',
    rotationSpeed: 2.23, 
    description: '土星是太陽系中最美麗的行星，擁有壯觀且複雜的環系統。這些光環由無數大小不一的冰塊與岩石組成，從微塵到房屋大小都有，儘管寬度達數十萬公里，厚度卻平均只有 10 公尺左右。土星本身是一顆氣態巨行星，大氣呈淡黃色，北極存在著一個神祕的六邊形風暴結構，其邊長大於地球直徑。',
    observationInfo: '土星環是業餘天文觀測中最令人驚嘆的景象。即使是入門級的小型望遠鏡，也能清楚看到光環的存在，使其看起來像一個帶著耳朵的圓球。若使用口徑較大的望遠鏡，可以看見光環中的黑色縫隙「卡西尼環縫」，以及土星本體投射在光環上的陰影，極具立體感。',
    realDistanceAU: 9.58,
    type: 'gas',
    moons: 146,
    magnitude: '最亮: +0.43 / 平均: +0.7',
    temperature: '-139°C (平均)',
    volume: '764 x 地球',
    mass: '95 x 地球',
    gravity: '10.44 m/s² (1.06G)'
  },
  {
    id: 'titan',
    parentId: 'saturn',
    name: '土衛六 (Titan)',
    color: '#FF8F00', // Orange
    texture: 'titan.jpg', 
    ringTexture: '',
    radius: 0.040, // ~0.404x Earth
    orbitRadius: 19, // ~20.3 Saturn Radii (Titan)
    eccentricity: 0.0288,
    orbitAngle: 0,
    inclination: 0.35, // Corrected: 0.35 deg inclination to Saturn equator
    axialTilt: 0.25, // Corrected: < 0.3 deg
    period: 0.0436, // 15.945 Days
    rotationPeriod: '15.9 天 (同步)',
    rotationSpeed: 0.063,
    description: '土衛六（Titan）是土星最大的衛星，也是太陽系第二大衛星。它是唯一擁有濃厚大氣層的衛星，大氣壓力甚至是地球的 1.5 倍，主要由氮氣組成。其表面擁有液態甲烷和乙烷組成的湖泊與河流，形成了與地球極為相似的循環系統，只是流動的不是水。由於大氣中充滿了有機化合物的霧霾，其表面呈現出神秘的橘黃色。',
    observationInfo: '土衛六亮度約 8.4 等，是土星最容易觀測的衛星。使用小型天文望遠鏡（口徑 8 公分以上）即可看到它呈現為一個橘色的小光點在土星旁邊運行。由於它圍繞土星公轉的軌道面與土星環平行，我們可以觀察到它在土星周圍繞行一圈的完整過程，週期約為 16 天。',
    realDistanceAU: 0.0081,
    type: 'moon',
    moons: 0,
    magnitude: '8.4 (衝時)',
    temperature: '-179°C (表面)',
    volume: '0.066 x 地球',
    mass: '0.0225 x 地球',
    gravity: '1.35 m/s² (0.14G)'
  },
  {
    id: 'uranus',
    name: '天王星 (Uranus)',
    color: '#7ED6DF',
    texture: 'uranus.jpg',
    ringTexture: '',
    radius: 0.4, // 4.0x Earth
    orbitRadius: 48000, // 19.2 AU * 2500
    eccentricity: 0.046,
    orbitAngle: 96,
    inclination: 1.02, 
    axialTilt: 97.8, 
    period: 84.01,
    rotationPeriod: '17.2 小時 (逆行)',
    rotationSpeed: 1.39, 
    description: '天王星是一顆寒冷的冰巨行星，大氣中豐富的甲烷吸收了紅光，使其呈現出獨特的青藍色。它的內部熱流極低，大氣活動相對平靜。最特別的是，天王星的自轉軸傾角高達 98 度，這意味著它是「躺著」繞太陽公轉的。這可能源於太陽系早期一次巨大的撞擊事件。',
    observationInfo: '天王星的亮度約為 5.7 等，正好位於人眼可見的極限邊緣。在完全無光害的深山中，視力極佳的人或許能勉強看到，但在一般環境下必須使用雙筒或天文望遠鏡。在望遠鏡中，它是一個微小的、不會閃爍的青色圓盤，與周圍針點般的恆星有明顯區別，但難以看到表面細節。',
    realDistanceAU: 19.22,
    type: 'ice',
    moons: 28,
    magnitude: '最亮: +5.32 / 平均: +5.68',
    temperature: '-197°C (平均)',
    volume: '63 x 地球',
    mass: '14.5 x 地球',
    gravity: '8.69 m/s² (0.89G)'
  },
  {
    id: 'neptune',
    name: '海王星 (Neptune)',
    color: '#4834D4',
    texture: 'neptune.jpg',
    ringTexture: '',
    radius: 0.38, // 3.88x Earth
    orbitRadius: 75000, // 30 AU * 2500. Matches manageable WebGL scale.
    eccentricity: 0.011, 
    orbitAngle: 273,
    inclination: 0.72, 
    axialTilt: 28.3,
    period: 164.8,
    rotationPeriod: '16.1 小時',
    rotationSpeed: 1.48, 
    description: '海王星是距離太陽最遠的行星，也是一顆深藍色的冰巨行星。儘管距離太陽極遠，接收到的熱量微乎其微，它卻擁有太陽系中最強烈的風暴，風速高達每小時 2100 公里（超音速）。科學家推測其內部可能有未知的熱源驅動著大氣活動。其最大的衛星「海衛一」沿著逆行軌道運行，並有噴發液態氮的冰火山。',
    observationInfo: '海王星是唯一一顆絕對無法用肉眼看見的八大行星，其視星等約為 7.8 等。必須使用口徑 8 公分以上的望遠鏡才能觀測。在視野中，它看起來像一顆極暗的藍色星星。由於視直徑極小，即使在高倍率下也只是一個模糊的小藍點，需要精確的星圖輔助才能在茫茫星海中找到它。',
    realDistanceAU: 30.05,
    type: 'ice',
    moons: 16,
    magnitude: '最亮: +7.78 / 平均: +7.9',
    temperature: '-201°C (平均)',
    volume: '57 x 地球',
    mass: '17 x 地球',
    gravity: '11.15 m/s² (1.14G)'
  }
];

export const ANIMATION_SCALE_FACTOR = 0.005;

// Fun Facts separated to avoid repetition
PLANETS.forEach(p => {
    switch(p.id) {
        case 'sun':
             p.description += '\n\n【冷知識】光子從太陽核心產生後，需要在緻密的內部不斷碰撞，耗時數萬年甚至十幾萬年才能抵達表面；但一旦脫離表面，只需 8 分 20 秒就能抵達地球。我們現在看到的陽光，其實是冰河時期前就產生的能量。';
             break;
        case 'mercury':
             p.description += '\n\n【冷知識】水星擁有獨特的「3:2 自轉軌道共振」，即公轉兩圈的時間剛好自轉三圈。這導致在水星的某些位置，太陽會升起、停在空中、倒退落下，然後再升起，一天（日出到日落）長達 176 個地球日，比它的一年還長。';
             break;
        case 'venus':
             p.description += '\n\n【冷知識】金星的自轉方向與大多數行星相反（逆行），這意味著在金星上太陽是「西升東落」的。而且它的自轉極慢，金星的一天（243 地球日）比金星的一年（225 地球日）還要長。';
             break;
        case 'earth':
             p.description += '\n\n【冷知識】地球並不是完美的圓球，而是一個扁球體。由於自轉離心力，赤道半徑比極半徑長約 21 公里。這意味著位於赤道的欽博拉索山（Chimborazo）頂峰，其實比聖母峰距離地心更遠，是名副其實的「離太空最近的地方」。';
             break;
        case 'moon':
             p.description += '\n\n【冷知識】月球正以每年約 3.8 公分的速度遠離地球。這意味著在遙遠的未來，月球在天空中的視直徑將變得太小而無法完全遮擋太陽，屆時地球上將永遠不再能看到壯觀的日全食，只能看到環食。';
             break;
        case 'mars':
             p.description += '\n\n【冷知識】火星上的夕陽是藍色的。這是因為火星大氣稀薄且充滿懸浮微塵，這些塵埃顆粒的大小傾向於散射紅光，讓紅光向四周擴散，而保留了波長較短的藍光直接穿透大氣，因此在太陽周圍形成藍色的光暈。';
             break;
        case 'jupiter':
             p.description += '\n\n【冷知識】木星與太陽的「共同質心」（Barycenter）實際上位於太陽表面之外。由於木星質量巨大，它是太陽系中唯一一個不繞著太陽「內部」運行的行星，而是與太陽一起繞著兩者之間的虛空點旋轉，讓太陽本身也產生明顯的晃動。';
             break;
        case 'io':
             p.description += '\n\n【冷知識】木衛一與木星之間存在著強大的「通量管」（Flux Tube）電流系統。木衛一火山噴發的電離物質會沿著木星磁場線移動，產生高達數百萬安培的電流，這不僅在木星極區製造出強烈的極光，還會發出強大的無線電波暴。';
             break;
        case 'europa':
             p.description += '\n\n【冷知識】木衛二表面的紅褐色條紋被稱為「線條」（Lineae）。有趣的是，這些條紋兩側的地貌特徵是錯位的，就像地球上的斷層一樣。這證明了它的冰殼是漂浮在液態層之上，並且可以自由移動與旋轉的。';
             break;
        case 'ganymede':
             p.description += '\n\n【冷知識】木衛三、木衛二與木衛一處於嚴格的 1:2:4 軌道共振狀態。這意味著木衛三每公轉一圈，木衛二就公轉兩圈，木衛一則公轉四圈。這種精密的引力舞蹈維持了它們的軌道離心率，並提供了持續的潮汐加熱來源。';
             break;
        case 'callisto':
             p.description += '\n\n【冷知識】木衛四擁有著名的「瓦爾哈拉撞擊盆地」（Valhalla），直徑達 3800 公里。與一般凹陷的隕石坑不同，它呈現出一圈圈同心圓的波紋結構，就像石頭丟進水中產生的漣漪被瞬間凍結了一樣，這顯示撞擊當時其冰殼下方可能存在較軟的物質。';
             break;
        case 'saturn':
             p.description += '\n\n【冷知識】土星是太陽系中密度最低的行星，其平均密度（0.687 g/cm³）甚至比水還低。這意味著如果有一個夠大的宇宙浴缸裝滿水，土星是唯一一顆會浮在水面上的行星，而其他行星都會沉下去。';
             break;
        case 'titan':
             p.description += '\n\n【冷知識】由於土衛六引力較小（約地球的 1/7）且大氣密度高（地球的 4 倍），如果你在土衛六表面裝上一對翅膀並用力揮動，你真的可以像鳥一樣在空中飛翔，而不需要推進器。';
             break;
        case 'uranus':
             p.description += '\n\n【冷知識】由於天王星是「躺著轉」，其極區會經歷長達 42 年的連續白晝，接著是 42 年的連續黑夜。只有在赤道附近，才能體驗到正常的晝夜交替，但那裡的太陽位置也極低。這種極端的季節變化是太陽系獨有的。';
             break;
        case 'neptune':
             p.description += '\n\n【冷知識】海王星是唯一一顆在被觀測到之前，先透過數學計算預測存在的行星。19世紀的天文學家發現天王星的軌道與理論不符，推算出外側還有一顆行星在進行重力干擾，隨後觀測者根據這些計算精確地找到了海王星的位置。';
             break;
    }
});