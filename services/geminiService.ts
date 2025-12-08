// Service to fetch observation guides (MOCKED DATA - No API Key required)
// Simulating AI responses with realistic astronomical data tailored for Hong Kong (2024-2025 Context)

export const getObservationGuide = async (planetName: string, dateStr: string, astronomyContext: string): Promise<string> => {
    // Simulate network delay for "Thinking" effect
    await new Promise(resolve => setTimeout(resolve, 800));

    const nameKey = planetName.split(' ')[0];

    // Context from 3D Model (Geometric)
    const isOpposition = astronomyContext.includes("衝");
    const isConjunction = astronomyContext.includes("合");
    const isEastElongation = astronomyContext.includes("東大距");
    
    // Default dynamic header
    let status = "一般";
    let timeDir = "需查閱星圖";
    let advice = "";

    // REALISM OVERRIDE (For 2024-2025 Season)
    
    switch (nameKey) {
        case '太陽':
            status = "全日可見";
            timeDir = "日間天空";
            advice = "今日日照強烈。觀測太陽黑子活動需特別謹慎。【絕對警告】必須使用巴德膜 (Baader Film) 或赫歇爾稜鏡覆蓋物鏡前端。切勿直接使用尋星鏡尋找太陽，以免瞬間失明。";
            break;

        case '水星':
            status = "良好（晨前最佳）";
            timeDir = "日出前東南低空，約5:16升起";
            advice = "水星正處2025年北半球最佳晨顯，亮度-0.5等，距太陽最大角7日後。黎明前45分鐘掃描東南地平線10°高處，肉眼或雙筒鏡可辨，伴Spica星。避免光污染，捕捉其閃爍橙光。";
            break;

        case '金星':
            status = "稍難（晨前低空）";
            timeDir = "日出前東南低空，約6:18升起";
            advice = "金星漸沉入晨曦，亮度-3.9等但僅7°離太陽。日出前1小時尋東南地平線，需無阻視野。雙筒鏡助辨其新月相，預告1月合日，錯過後數月難見。";
            break;

        case '地球':
            return `【2025年12月8日香港觀測建議（模擬）】\n\n1. 觀測狀況：身在其中\n2. 時間方位：N/A\n3. 亮度預估：N/A\n4. 專業建議：今日空氣品質指標 (AQI) 與光害程度將決定觀測品質。建議前往視野開闊且光害較少處仰望星空，感受地球在宇宙中的渺小。`;

        case '月球':
            status = "極佳（上弦後一天）";
            timeDir = "下午1:20升起，日落後東南高空，整夜可見";
            advice = "今晚農曆十一（上弦後1日），月齡10.8天，亮度-12.2等，約70%照亮。最佳觀測時段：晚上8點至凌晨。香港時間20:30左右，月球位於雙魚座，與土星同框，超美合影機會！";
            break;

        case '火星':
            status = "極難（日間或暮光）";
            timeDir = "日出前東方低空，約7:31升起，日沒後西沉";
            advice = "火星陷太陽光輝，亮度1.3等，距太陽僅10°。全天幾乎不可見，僅專業濾鏡或望遠鏡在暮光試探。待2026春季再現，現階段專注其雙子座位置預測軌跡。";
            break;

        case '木星':
            status = "極佳（整夜高懸）";
            timeDir = "日落後東北升起，整夜可見，約8:21升起";
            advice = "木星位雙子座，亮度-2.5等，視直徑大。望遠鏡觀伽利略衛星凌日事件頻仍，雲帶清晰。1月10日衝日後更佳，現為冬季王者，伴Castor & Pollux雙星閃耀。";
            break;

        case '木衛一':
        case '木衛二':
        case '木衛三':
        case '木衛四':
            status = "極佳（需雙筒鏡）";
            timeDir = "日落後東北升起，整夜跟隨木星";
            advice = "四顆衛星每晚位置不同，猶如微型的太陽系。建議下載手機 App (如 Stellarium) 確認今晚排列。若見到衛星消失，可能是進入了木星影區 (食) 或正在經過木星表面 (凌)。";
            break;

        case '土星':
            status = "良好（晚間南天）";
            timeDir = "下午1:08升起，日落後南方高空，至午夜西沉";
            advice = "土星在水瓶座，亮度0.9等，光環傾角-1.5°邊緣視。望遠鏡辨泰坦衛星及環隙，月球26日訪。早晚觀最佳，避免城市燈光，捕捉其金黃光輝。";
            break;
            
        case '土衛六':
             status = "良好（需望遠鏡）";
             timeDir = "下午1:08升起，日落後南方高空";
             advice = "Titan亮度8.0等，距土星1.0角分，厚霧大氣橘橙。環邊緣傾角下易辨，望遠鏡見其點光。12月最佳期探測甲烷湖，伴土星環隙觀測。";
             break;

        case '天王星':
            status = "中等（需儀器）";
            timeDir = "下午4:27升起，整夜東方至晨前西沉";
            advice = "天王星在金牛座，亮度5.6等，11月21日衝日後仍亮。雙筒鏡或小望遠鏡辨其青綠盤，距木星不遠可順道比對。暗空下掃描，留意其慢速逆行。";
            break;

        case '海王星':
            status = "難（需望遠鏡）";
            timeDir = "下午1:18升起，晚間南方，至午夜西沉";
            advice = "海王星在雙魚座，亮度7.8等，伴土星3.5°內。8吋以上望遠鏡見其藍盤，搜尋星圖精準定位。專業者試探Triton衛星，暮光後1小時最佳，避免月光干擾。";
            break;

        default:
            status = "資料分析中";
            timeDir = "請參考星圖";
            advice = "請確保觀測地點光害少、視野開闊。";
    }

    return `【2025年12月8日香港觀測建議（模擬）】

1. 觀測狀況：${status}
2. 時間方位：${timeDir}
3. 專業建議：${advice}`;
};
