import * as constants from './constants';

export const vi: any = {
    appTitle: "AIVAP",
    developedBy: "Phát triển bởi AIAI Studio",
    sponsoredBy: "Đồng hành bảo trợ phát triển VietCG",
    apiVersionWarning: "Phiên bản này cần có API của google để hoạt động xem hướng dẫn bên phải",
    changeLanguage: "Thay đổi ngôn ngữ",
    welcomeTitle: "AIVAP APP",
    welcomeSubtitle: "Được phát triển bởi Hong Quang VAP",
    welcomeStartButton: "Bắt đầu",
    navHome: "TRANG CHỦ",
    navHistory: "LỊCH SỬ",
    navSettings: "CÀI ĐẶT",
    settingsTitle: "CÀI ĐẶT",
    appearance: "Giao diện",
    theme: "Chủ đề",
    themeDark: "Tối",
    themeLight: "Sáng",
    themeWarm: "Ấm (Mặc định)",
    themeCold: "Lạnh",
    toolLabel: "CÔNG CỤ AI",
    freeMode: "Bản tạo ảnh miễn phí",
    freeModeDesc: "Tạo hình ảnh chất lượng cao từ văn bản miễn phí.",
    proMode: "Bản tạo ảnh chất lượng cao có phí",
    proModeDesc: "Sử dụng model mạnh nhất (Gemini 3 Pro) để tạo ảnh chi tiết cao.",
    tabCreate: "Tạo Ảnh",
    tabArchitecture: "Kiến trúc",
    tabInterior: "Nội thất",
    tabPlanning: "Quy hoạch",
    tabCameraAngle: "Góc camera",
    tabEdit: "Edit Ảnh",
    tabPlanTo3D: "Mặt bằng",
    tabCanvaMix: "Canva Mix",
    tabCreatePrompt: "Magic Prompt",
    tabTrend: "Trend",
    tabCreateVideo: "Tạo Video",
    library: "Thư viện",
    tabUtilities: "Tiện ích",
    tabLibrary: "Thư viện",
    tabEditorBeta: "Editor Beta",
    uploadImage: "Tải ảnh lên",
    uploadImageOptional: "Tải ảnh lên (Tùy chọn)",
    handDrawnHint: "Ưu tiên ảnh vẽ tay, ảnh sketchup không bóng đổ và bao cảnh",
    referenceImage: "Ảnh tham chiếu (Style)",
    prompt: "Prompt",
    negativePrompt: "Prompt loại trừ (Negative Prompt)",
    negativePromptDefault: "hoạt, minh họa 2D, phác thảo, CGI, lỗi render, render giả, phong cách Unreal Engine, tài sản phẩm trò chơi, lowpoly, bề mặt nhựa, kết cấu sáp, ánh sáng, phản chiếu không chính xác, quá sáng, thiếu sáng, độ tương phản chậm, nhạt, nhiễu, bù, lỗi bản đồ độ sâu, không sai lệch, tỷ lệ thực tế, bóng giả, sai lệch, độ phân giải thấp, chi tiết Thấp, chất lượng thấp, quá bão hòa, viền sắc nét, quần sáng, đường viền, viền phát sáng, bố cục xấu, DOF không chính xác, cắt bỏ, văn bản, hình mờ, logo, posterized, tranh vẽ, bản vẽ, giống đồ chơi, ánh sáng nhân tạo, vật liệu không thực tế, đối tượng lặp, kết hợp Blur, vật liệu, ánh xạ kết cấu, đường cong, mô hình",
    negativePromptHelp: "Liệt kê những thứ bạn không muốn xuất hiện trong ảnh.",
    aspectRatio: "Tỷ lệ khung hình",
    imageCount: "Số lượng ảnh",
    imageSize: "Kích thước (Chỉ dùng cho API)",
    dropzoneHint: "Kéo thả, dán, hoặc click",
    dropzoneFormats: "PNG, JPG, WEBP",
    download: "Tải",
    original: "Gốc",
    result: "Kết quả",
    delete: "Xóa",
    choosePresetImage: "Chọn ảnh có sẵn",
    close: "Đóng",
    referenceImageHelp: "AI sẽ lấy cảm hứng về phong cách, ánh sáng, bối cảnh và vật liệu.",
    processingImage: "Đang xử lý ảnh...",
    addFromPresets: "Or chọn prompt có sẵn để thêm vào:",
    style: "Phong cách",
    context: "Bối cảnh",
    lighting: "Ánh sáng",
    roomType: "Loại phòng",
    planningObject: "Đối tượng",
    planningStyle: "Phong cách",
    planningStructure: "Công trình",
    aspectRatioHelp: "Chỉ có hiệu lực khi không tải lên 'Ảnh gốc'.",
    generateFromImage: "Prompt từ ảnh",
    generateFromPromptText: "Prompt từ Prompt",
    generating: "Đang tạo...",
    specifyCloseUpAngle: "Chỉ định góc cận cảnh (Tùy chọn)",
    specifyCloseUpHelp: "Vẽ một hình chữ nhật trên ảnh để AI tự động render cận cảnh khu vực đó.",
    selectArea: "Chọn vùng",
    cancel: "Hủy",
    clearSelection: "Xóa vùng chọn",
    chooseCameraAngle: "Chọn góc camera",
    selectCameraAnglePlaceholder: "-- Chọn góc camera --",
    customDescription: "Mô tả tùy chỉnh",
    customDescriptionPlaceholder: "Ví dụ: chụp từ góc 3/4 từ dưới lên...",
    chooseFunction: "Chọn chức năng",
    editSelectedArea: "Sửa vùng chọn",
    smartEdit: "Chỉnh sửa Thông minh",
    mergeHouse: "Ghép nhà",
    mergeMaterial: "Thay vật liệu",
    mergeFurniture: "Thay nội thất",
    editFunctionHelp: {
        inpaint: "Xóa hoặc thay thế đối tượng trong ảnh bằng cách vẽ vùng chọn và nhập mô tả.",
        smartEdit: "Chỉnh sửa độ nét cao bằng cách chọn vùng làm việc (khung) và tô vùng thay đổi (mask).",
        mergeHouse: "Ghép một công trình mới vào bối cảnh có sẵn.",
        mergeMaterial: "Áp dụng vật liệu từ ảnh thứ hai lên đối tượng trong ảnh gốc.",
        mergeFurniture: "Thay thế đồ nội thất trong ảnh gốc bằng đồ từ ảnh thứ hai.",
        canva: "Ghép nhiều đồ rời (PNG tách nền) vào không gian với tỉ lệ và ánh sáng thực tế."
    },
    uploadSourceImage: "Tải ảnh gốc",
    sourceImage: "Ảnh gốc",
    secondImage: "Ảnh thứ hai",
    addObjects: "Thêm đối tượng",
    addObject: "Thêm đối tượng",
    planImage: "Ảnh mặt bằng",
    styleReference: "Ảnh tham chiếu",
    architecturalImage: "Ảnh kiến trúc",
    characterOptional: "Nhân vật (Tùy chọn)",
    toIncludeInPrompts: "Để đưa vào prompt",
    uploadContextImage: "Tải ảnh bối cảnh (Ảnh 1)",
    contextImageHelp: "Ảnh bối cảnh đã bôi đỏ phần khu đất cần ghép nhà",
    resetImage: "Sóa Ảnh & Bắt đầu lại",
    chooseToolAndDraw: "Chọn công cụ & Vẽ vùng chọn",
    lassoTool: "Lasso",
    brushTool: "Tô (Brush)",
    brushSelection: "Tô vùng chọn",
    brushSelectionHelp: "Tô đỏ khu vực bạn muốn thay đổi trên ảnh gốc.",
    lineThickness: "Độ dày đường viền",
    brushSize: "Kích thước cọ",
    uploadReferenceOptional: "Tải ảnh tham chiếu (Tùy chọn)",
    referenceImageHelpEdit: "AI sẽ lấy cảm hứng từ ảnh này để thay đổi vùng đã chọn.",
    uploadBuildingImage: "Tải ảnh công trình (Ảnh 2)",
    uploadMaterialFurnitureImage: "Tải ảnh vật liệu/nội thất (Ảnh 2)",
    image2Help: "Lưu ý nên tách nền và tỷ lệ ảnh 2 gần bằng tỷ lệ ảnh 1. Ví dụ cùng tỷ lệ 3:4.",
    promptPlaceholder: {
        create: "Ví dụ: một ngôi nhà hiện đại, ánh sáng ban ngày, ảnh thực tế...",
        negative: "ví dụ: chữ, chữ ký, chất lượng thấp, nhiễu",
        inpaint: "Ví dụ: thêm một cửa sổ kiểu vòm...",
        smartEdit: "Mô tả thay đổi cho vùng mask bên trong khung...",
        mergeHouse: "Mô tả cách ghép hai ảnh...",
        mergeMaterial: "Ví dụ: Thay thảm ở ảnh 1 bằng thảm họa tiết trong ảnh 2",
        mergeFurniture: "Mô tả cách ghép hai ảnh...",
        planTo3dRender: "Phòng khách hiện đại...",
        planTo3dColorize: "Tông màu pastel...",
        video: "Mô tả chuyển động...",
        videoPrompt: "Ví dụ: một cảnh flycam bay chậm từ xa lại gần công trình...",
        vr360: "Ví dụ: sảnh chờ khách sạn sang trọng, ảnh toàn cảnh 360 độ, kiến trúc hiện đại...",
        editorBeta: "Mô tả thay đổi cho vùng đã chọn...",
        cameraAngle: "Mô tả góc camera mới (ví dụ: góc nhìn từ trên cao, góc thấp, nội thất từ cửa sổ...)"
    },
    promptExamples: "Hoặc chọn prompt mẫu:",
    selectOption: "-- Chọn một tùy chọn --",
    upload2dPlan: "Tải bản vẽ 2D",
    chooseGoal: "Chọn mục tiêu",
    create3DImage: "Tạo ảnh 3D",
    colorizePlan: "Tổ màu mặt bằng",
    analyzePlanPrompt: "Phân tích style mẫu",
    suggestions: "Gợi ý",
    motionDescription: "Mô tả chuyển động",
    selectSuggestion: "-- Chọn một gợi ý --",
    uploadSpaceImage: "Tải ảnh không gian (nền)",
    changeBgImage: "Thay đổi ảnh nền",
    clickOrDropNew: "Click hoặc kéo thả ảnh mới",
    deleteAll: "Sóa tất cả",
    uploadDecorImage: "Tải ảnh đồ decor (tách nền)",
    decorHelp: "Nên dùng ảnh đã tách nền (PNG)",
    clickToAdd: "Click để thêm vào canvas",
    adjustments: "Tinh chỉnh",
    lockLayout: "Khóa Layout",
    deleteObject: "Xóa đối tượng (hoặc dùng phím Backspace)",
    rotate: "Xoay",
    flipHorizontal: "Lật ngang",
    flipVertical: "Lật dọc",
    uploadToAnalyze: "Tải ảnh lên để phân tích",
    editorBetaStep1: "BƯỚC 1: Tải ảnh gốc",
    editorBetaSelectTool: "Chọn công cụ chọn vùng",
    editorBetaBoundingBox: "Khung chọn (Box)",
    editorBetaMask: "Mặt nạ (Cọ vẽ)",
    editorBetaStep2: "BƯỚC 2: Prompt & Tham chiếu",
    editorBetaGenerateContent: "Tạo nội dung",
    editorBetaStep3: "BƯỚC 3: Tinh chỉnh & Ghép",
    editorBetaExpansion: "Mở rộng vùng biên (px)",
    editorBetaEdgeBlend: "Làm mềm biên (px)",
    editorBetaIntermediateResult: "Kết quả trung gian",
    editorBetaFinalResult: "Kết quả cuối cùng",
    mergeToOriginal: "Ghép vào ảnh gốc",
    analyzeHelp: "AI sẽ phân tích ảnh và tạo ra 20 prompt nhiếp ảnh chuyên nghiệp.",
    uploadCharacterImage: "Tải ảnh nhân vật (Tùy chọn)",
    characterHelp: "AI sẽ phân tích và đưa nhân vật này vào các góc chụp có người.",
    characterDescriptionLabel: "Nhân vật trong ảnh",
    analyzingCharacter: "Đang phân tích nhân vật...",
    uploadStartImage: "Tải ảnh bắt đầu",
    virtualTourHelp: "Tải lên một ảnh render 3D để bắt đầu chuyến tham quan ảo.",
    createImage: "Tạo Ảnh",
    createVideo: "Tạo Video",
    createPrompt: "Tạo Prompt",
    choosePresetMaterial: "Chọn vật liệu có sẵn",
    loadingReference: "Đang tải ảnh...",
    loadingStart: "Bắt đầu quá trình tạo...",
    loadingAnalyzePrompts: "Đang phân tích ảnh và tạo prompts...",
    loadingAnalyzingArea: "Đang phân tích và tái tạo chi tiết vùng chọn...",
    loadingMessageDefault: "Đang tạo ảnh, xin đợi một chút...",
    loadingUsageLimit: "Giới hạn sử dụng AIcomplex:",
    loadingUsageText: "Mỗi người dùng có thể tạo từ 40 – 45 hình ảnh mỗi ngày. Để tăng số lượt tạo ảnh, bạn có thể sử dụng 2–3 địa chỉ Gmail khác nhau.",
    loadingUsageNote: "👉 Lưu ý: Mỗi email nên đăng nhập ở một trình duyệt hoặc tab Chrome riêng biệt để tránh xung đột tài khoản.",
    loadingAdText: "Nếu bạn muốn tạo ảnh đẹp hơn có thể tham khảo các khóa học Ứng dụng Ai trong kiến trúc, nội thất của AIAI - Lh 0387414593",
    loadingVideoHeader: "AI đang tạo video của bạn...",
    loadingVideoHelp: "Quá trình tạo video có thể mất vài phút. Vui lòng không đóng hoặc tải lại trang.",
    loadingPromptHeader: "Đang tạo prompts...",
    loadingPromptHelp: "AI đang phân tích hình ảnh của bạn để tạo ra các mô tả nhiếp ảnh độc đáo.",
    emptyStateHeader: "Kết Quả Render",
    emptyStateText: "Kết quả sẽ xuất hiện ở đây.",
    emptyCanvaHeader: "Không gian sáng tạo của bạn",
    emptyCanvaText: "Tải lên 'ảnh không gian' ở bảng điều khiển để bắt đầu.",
    emptyPromptHeader: "Gợi ý Prompt chuyên nghiệp",
    emptyPromptText: "Tải lên một ảnh ở bảng điều khiển và AI sẽ tạo ra 20 prompt theo phong cách nhiếp ảnh gia.",
    emptyTourHeader: "Tham quan ảo",
    emptyTourText: "Tải lên một ảnh render ở bảng điều khiển để bắt đầu chuyến tham quan của bạn.",
    tourHistory: "Lịch sử chuyến tham quan",
    fullscreen: "Xem toàn màn hình",
    editThisImage: "Chỉnh sửa ảnh này",
    useAsSource: "Sử dụng làm ảnh nguồn",
    downloadImage: "Tải ảnh",
    downloadVideo: "Tải video",
    copyPrompt: "Copy prompt",
    noPrompt: "Chưa có prompt",
    createFromThisPrompt: "Tạo ảnh từ prompt này",
    tourUndo: "Hoàn tác",
    tourRedo: "Lạnh lại",
    saveToLibrary: "Lưu vào thư viện",
    saved: "Đã lưu!",
    history: "Lịch sử",
    clearAll: "Sóa tất cả",
    clearHistoryConfirm: "Bạn có chắc muốn xóa toàn bộ lịch sử không?",
    review: "Xem lại",
    images: "ảnh",
    prompts: "Prompts",
    historyEmpty: "Kết quả từ các lần tạo ảnh trước sẽ được lưu ở đây.",
    libraryEmptyHeader: "Thư viện của bạn trống",
    libraryEmptyText: "Lưu những hình ảnh bạn thích từ bảng kết quả để xem lại sau.",
    deleteFromLibrary: "Xóa khỏi viện",
    closeFullscreen: "Đóng",
    editImage: "Chỉnh sửa ảnh",
    reset: "Reset",
    saveImage: "Lưu ảnh",
    apiKeyRequired: "Yêu cầu API Key",
    apiKeyDescription: "Để sử dụng tính năng tạo video, bạn cần chọn một API Key từ dự án Google Cloud của bạn. Tính năng này sử dụng model Veo và có thể phát sinh chi phí.",
    apiKeyBillingInfo: "Để biết thêm thông tin về giá, vui lòng tham khảo",
    billingDocs: "tài liệu thanh toán",
    selectApiKey: "Chọn API Key",
    alertUploadSource: "Vui lòng tải lên ảnh nguồn.",
    alertDrawMask: "Vui lòng vẽ một vùng chọn trên ảnh để chỉnh sửa.",
    alertSelectSmartBox: "Vui lòng khoanh khung làm việc (Bước 1) trên ảnh.",
    alertSelectSmartMask: "Vui lòng tô vùng cần sửa (Bước 2) bên trong khung.",
    alertUploadBothImages: "Vui lòng tải lên cả hai ảnh để thực hiện.",
    alertUploadBg: "Vui lòng tải lên ảnh không gian (nền).",
    alertUploadDecor: "Vui lòng tải lên ít nhất một ảnh đồ decor.",
    alertEnterPrompt: "Vui lòng nhập mô tả (prompt).",
    alertGenerationFailed: "Đã xảy ra lỗi khi tạo. Vui lòng kiểm tra API key và thử lại.",
    alertInvalidApiKey: "API Key không hợp lệ hoặc đã bị xóa. Vui lòng chọn một API Key khác.",
    alertNoSourceForPrompt: "Không tìm thấy ảnh nguồn từ tab Tạo Prompt. Vui lòng thử lại.",
    alertImageGenFailedRetry: "Đã xảy ra lỗi khi tạo ảnh. Vui lòng thử lại.",
    alertTourFailed: "Đã xảy ra lỗi khi tạo khung hình tiếp theo.",
    alertApiKeyUtilUnavailable: "API Key selection utility is not available.",
    alertImageGenFailed: "AI did not return any images.",
    alertMoodboard: "Vui lòng tải lên ảnh nguồn cảm hứng và nhập mô tả chủ đề.",
    alertLighting: "Vui lòng tải ảnh lên và chọn ít nhất một loại ánh sáng.",
    alertVideoPrompt: "Vui lòng tải lên ảnh nguồn và nhập yêu cầu chuyển động.",
    alertStyleChange: "Vui lòng tải ảnh, nhập yêu cầu style, và tạo prompt trước khi tạo ảnh.",
    alertStylePromptGen: "Vui lòng tải ảnh và nhập yêu cầu style để tạo prompt.",
    alertSelectArea: "Vui lòng chọn một khu vực trên ảnh trước.",
    donate: "Donate",
    promptInitial: "Ảnh chụp thực tế ngôi nhà",
    promptInterior: "Ảnh chụp thực tế nội thất",
    promptInitialPlanning: "ảnh chụp thực tế Master Plan view nhìn chim bay từ trên cao của",
    promptCloseUp: "Góc chụp cận cảnh tập trung vào chi tiết của",
    promptCanvaMix: "Canva Mix generation",
    promptArchitecturalGenerated: "Đã tạo Prompts kiến trúc",
    defaultNegativePrompt: "cartoon, 2d illustration, sketch, cgi, render artifact, fake render, unreal engine style, game asset, lowpoly, plastic surface, wax texture, flat lighting, incorrect reflections, overexposed, underexposed, low contrast, washed out, noisy, blurry, depth map error, distorted perspective, unrealistic scale, fake shadows, wrong proportion, low resolution, low detail, low quality, over-saturated, oversharpened edges, halo, outline, glowing edges, bad composition, incorrect DOF, cutout, text, watermark, logo, posterized, painting, drawing, toy-like, artificial lighting, non-realistic material, duplicated objects, blurry wall texture, flat materials, poor texture mapping, distorted lines, model border",
    utilitiesTitle: "Tiện ích Mở rộng",
    moodboardTitle: "Tạo Moodboard",
    moodboardDesc: "Tải lên một hình ảnh và nhập mô tả để AI tạo ra một bảng cảm hứng (moodboard) hoàn chỉnh with bảng màu, vật liệu và hình ảnh liên quan.",
    videoPromptTitle: "Kịch bản Video",
    videoPromptDesc: "Tạo kịch bản chuyển động chi tiết cho video kiến trúc.",
    lightingTitle: "Thiết lập Ánh sáng",
    lightingDesc: "Thử nghiệm các kịch bản chiếu sáng khác nhau cho mô hình của bạn.",
    virtualTourTitle: "Tham quan ảo",
    virtualTourDesc: "Tải lên một ảnh render 3D và di chuyển trong không gian bằng AI.",
    extendViewTitle: "Mở rộng View",
    extendViewDesc: "Mở rộng khung hình của ảnh theo tỉ lệ mong muốn bằng cách AI tự động vẽ thêm phần còn thiếu.",
    changeStyleTitle: "Thay đổi Style",
    changeStyleDesc: "Tải ảnh lên, mô tả phong cách mới và AI sẽ tạo ra một prompt chuyên nghiệp để biến đổi hình ảnh của bạn.",
    interiorViewTitle: "Sáng tạo view nội thất",
    interiorViewDesc: "Tải ảnh 1 không gian nội thất lên AI sẽ sáng tạo 9 không gian khác nhau cùng style với không gian gốc",
    architectureViewTitle: "Sáng tạo kiến trúc",
    architectureViewDesc: "Tải ảnh kiến trúc lên Ai sẽ tạo 9 góc camera khác nhau từ ảnh đó",
    archToInteriorTitle: "Nội thất từ Kiến trúc",
    archToInteriorDesc: "Tải ảnh kiến trúc lên Ai sẽ tạo 9 góc camera nội thất khác nhau từ ảnh kiến trúc đó",
    syncViewTitle: "Đồng bộ View",
    syncViewDesc: "Đồng nhất phong cách, vật liệu và ánh sáng từ ảnh mẫu sang các góc view khác.",
    lightingSimulationTitle: "Mô phỏng ánh sáng & style",
    lightingSimulationDesc: "Vẽ lại ảnh đã render theo mood ánh sáng và phong cách của ảnh tham khảo.",
    constructionProcessTitle: "Quá trình xây dựng",
    constructionProcessDesc: "Tái hiện các giai đoạn xây dựng từ hiện trạng thô đến hoàn thiện sân vườn từ ảnh thực tế.",
    canvaMixTitle: "Canva Mix",
    canvaMixDesc: "Ghép đồ nội thất và trang trí vào không gian with tỉ lệ và ánh sáng thực tế.",
    vr360Title: "VR 360",
    vr360Desc: "Tạo không gian 360 độ từ mô tả hoặc tải ảnh Panorama lên để tham quan thực tế ảo.",
    vr360ViewTitle: "Không gian 360 của bạn",
    vr360ViewDesc: "Kéo chuột để khám phá không gian xung quanh.",
    uploadVrImage: "Tải ảnh Panorama 360",
    vr360PromptLabel: "Mô tả không gian 360",
    generateVrButton: "Tạo VR 360",
    comingSoon: "Sắp ra mắt",
    backToUtilities: "Quay lại Tiện ích",
    uploadInspirationImage: "1. Tải ảnh nguồn cảm hứng",
    uploadReferenceImage: "2. Tải ảnh tham chiếu (Style)",
    moodboardPromptHelp: "3. Mô tả chủ đề hoặc phong cách",
    moodboardReferenceHelp: "AI sẽ lấy cảm hứng về màu sắc và phong cách từ ảnh này.",
    moodboardImageCount: "4. Số lượng kết quả",
    generateMoodboardButton: "Tạo Moodboard",
    moodboardEmptyHeader: "Bảng cảm hứng của bạn",
    moodboardEmptyText: "Tải ảnh và nhập mô tả để bắt đầu.",
    generatingMoodboard: "Đang tạo moodboard...",
    moodboardSamplePrompt: "Sử dụng prompt mẫu",
    moodboardSamplePromptText: "tạo ảnh moodboard đò rời nội thất, tách riêng từng đồ rời with nền trắng, sẽ có 1 ảnh tổng thể ở trung tâm, bên dưới sẽ là các đồ rời tách riêng (gường, tab đầu giường, tủ quảng áo, đèn, thảm, rèm), bên phải là bảng màu và vật liệu, tất cả nằm gọn trong 1 khung dọc còn lại là nền trắng",
    uploadModelImage: "1. Tải ảnh mô hình",
    chooseLighting: "2. Chọn loại ánh sáng",
    interiorLighting: "Ánh sáng Nội thất",
    exteriorLighting: "Ánh sáng Ngoại thất",
    generateLightingButton: "Tạo ảnh with ánh sáng mới",
    lightingEmptyHeader: "Không gian ánh sáng của bạn",
    lightingEmptyText: "Tải ảnh lên để bắt đầu thử nghiệm các kịch bản chiếu sáng.",
    generatingLighting: "Đang tạo ảnh mới...",
    motionRequest: "2. Yêu cầu chuyển động (tiếng Việt)",
    generatingVideoPrompt: "Đang tạo prompt video...",
    generatedVideoPromptTitle: "Prompt đã tạo (tiếng Anh)",
    videoPromptEmptyHeader: "Kịch bản Video của bạn",
    videoPromptEmptyText: "Tải ảnh lên và nhập yêu cầu để AI tạo ra một prompt video chuyên nghiệp.",
    uploadImageToExtend: "1. Tải ảnh cần mở rộng",
    chooseAspectRatio: "2. Chọn tỉ lệ khung hình mới",
    generateExtendedView: "Mở rộng View",
    generatingExtendedView: "Đang mở rộng view...",
    extendViewEmptyHeader: "Không gian mở rộng của bạn",
    extendViewEmptyText: "Tải ảnh lên và chọn tỉ lệ để bắt đầu.",
    uploadImageForStyleChange: "1. Tải ảnh cần thay đổi style",
    enterStyleRequest: "2. Nhập yêu cầu về phong cách",
    styleRequestPlaceholder: "Ví dụ: phong cách Indochine, phong cách cyberpunk, tông màu ấm áp...",
    generateNewPromptButton: "Tạo Prompt Mới",
    generatedPromptReady: "3. Prompt đã sẵn sàng! (Có thể chỉnh sửa)",
    generateStyledImageButton: "Tạo ảnh with Style mới",
    generatingStylePrompt: "Đang tạo prompt mới...",
    generatingStyledImages: "Đang tạo ảnh theo style mới...",
    interiorViewStep1: "1. Tải ảnh nội thất mẫu",
    interiorViewStep1Desc: "Tải 1 ảnh có style, vật liệu và màu sắc bạn muốn nhân bản.",
    interiorViewStep2: "2. Tải ảnh nhân vật (Tùy chọn)",
    interiorViewStep2Desc: "Nếu tải lên, nhân vật này sẽ xuất hiện trong các không gian.",
    interiorViewStep3: "3. Bắt đầu sáng tạo",
    interiorViewStep3Desc: "AI sẽ tạo ra 9 không gian đồng nhất.",
    architectureViewStep1: "1. Tải ảnh kiến trúc mẫu",
    architectureViewStep1Desc: "Tải 1 ảnh có hình khối cơ bản hoặc style bạn muốn phát triển.",
    architectureViewStep2: "2. Tải ảnh nhân vật (Tùy chọn)",
    architectureViewStep2Desc: "Nếu tải lên, nhân vật này sẽ xuất hiện trong các phương án.",
    architectureViewStep3: "3. Bắt đầu sáng tạo",
    architectureViewStep3Desc: "AI sẽ tạo ra 9 phương án kiến trúc khác nhau.",
    archToInteriorStep1: "1. Tải ảnh Kiến trúc (Ngoại thất)",
    archToInteriorStep1Desc: "Tải ảnh mặt tiền hoặc phối cảnh công trình. AI sẽ tự thiết kế nội thất tương ứng.",
    archToInteriorStep2: "2. Tải ảnh nhân vật (Tùy chọn)",
    archToInteriorStep2Desc: "Nhân vật sẽ được đưa vào các không gian nội thất.",
    archToInteriorStep3: "3. Sáng tạo nội thất",
    archToInteriorStep3Desc: "AI tạo 9 không gian: phòng khách, bếp, ngủ... đồng nhất phong cách kiến trúc.",
    syncViewStep1: "1. Tải ảnh View Mẫu",
    syncViewStep1Desc: "Tải 1 ảnh đã render đẹp để AI ghi nhớ style, vật liệu và ánh sáng.",
    syncViewStep2: "2. Tải ảnh View Cần Đồng Bộ",
    syncViewStep2Desc: "Tải ảnh phác thảo hoặc render thô ở góc máy khác.",
    syncViewStep3: "3. Bắt đầu đồng bộ",
    syncViewStep3Desc: "AI sẽ vẽ lại view thứ 2 theo đúng style của view 1.",
    lightingSimulationStep1: "1. Tải ảnh đã render",
    lightingSimulationStep1Desc: "Tải ảnh render hiện tại bạn muốn thay đổi mood and style.",
    lightingSimulationStep2: "2. Tải ảnh Ánh sáng Tham khảo",
    lightingSimulationStep2Desc: "Tải ảnh có mood ánh sáng và phong cách diễn họa mong muốn.",
    lightingSimulationStep3: "3. Mô phỏng ánh sáng",
    lightingSimulationStep3Desc: "AI sẽ render lại ảnh 1 theo đúng kịch bản của ảnh 2.",
    constructionStep1: "1. Tải ảnh công trình đã hoàn thiện",
    constructionStep1Desc: "Tải ảnh phối cảnh hoặc thực tế của công trình để AI tính toán các giai đoạn trước đó.",
    constructionStep2: "2. Bắt đầu mô phỏng",
    constructionStep2Desc: "AI sẽ tạo ra 5 bức ảnh tương ứng với 5 giai đoạn thi công chính.",
    stageMessy: "Hiện trạng bừa bãi",
    stageCleaned: "Hiện trạng dọn sạch",
    stageRough: "Xây thô (Chưa sơn)",
    stageFinishing: "Hoàn thiện (Sơn & Cửa)",
    stageLandscape: "Hoàn thiện sân vườn",
    stageFinal: "Hoàn thiện thực tế",
    convertToWatercolor: "Sketch màu nước",
    convertingToWatercolor: "Đang chuyển sang Sketch màu nước...",
    generatingConstructionViews: "Đang tính toán các giai đoạn xây dựng...",
    generatingArchitectureViews: "Đang phân tích và tạo các phương án kiến trúc...",
    generatingArchitectureOption: "Đang tạo {0}...",
    downloadAll: "Tải xuống tất cả",
    roomLiving: "Phòng khách",
    roomBedroom: "Phòng ngủ",
    roomKitchen: "Phòng bếp",
    roomDining: "Phòng ăn",
    roomStudy: "Phòng đọc",
    roomBath: "Phòng tắm",
    roomHall: "Hành lang",
    roomDetail: "Góc cận cảnh",
    roomOutdoor: "Ban công / Sân vườn",
    archOption: "Phương án",
    archViewTypes: {
        wide1: "Toàn cảnh 1 (Bình minh)",
        wide2: "Toàn cảnh 2 (Hoàng hôn)",
        wide3: "Toàn cảnh 3 (Góc chim bay)",
        close1: "Cận cảnh 1 (Vật liệu bề mặt)",
        close2: "Cận cảnh 2 (Chi tiết cấu tạo)",
        close3: "Cận cảnh 3 (Lối vào & Sảnh)",
        close4: "Cận cảnh 4 (Góc kiến trúc)",
        artistic1: "Nghệ thuật 1 (Xóa phông tiền cảnh)",
        artistic2: "Nghệ thuật 2 (Phối cảnh đêm)"
    },
    smartEditStep1: "1. Khoanh khung làm việc (Box)",
    smartEditStep1Desc: "Chọn vùng nhỏ quanh đối tượng để AI tập trung xử lý.",
    smartEditStep2: "2. Tô vùng cần sửa (Mask)",
    smartEditStep2Desc: "Chỉ những phần được tô đỏ mới bị thay đổi.",
    smartEditStep3: "3. Nhập mô tả",
    smartEditStep4: "4. Render & Ghép ảnh",
    confirmAreaPrompt: "Xác nhận Prompt Cận cảnh",
    editAreaPromptDesc: "AI đã phân tích vùng chọn. Bạn có thể chỉnh sửa mô tả bên dưới trước khi tạo ảnh.",
    confirmAndGenerate: "Xác nhận & Tạo ảnh",
    trendLayoutTitle: "Dàn trang bản vẽ",
    trendLayoutDesc: "Tạo bố cục kiến trúc từ ý tưởng.",
    trendModelTitle: "Tạo Bản vẽ",
    trendModelDesc: "Tạo các bản vẽ kỹ thuật chiếu vuông góc.",
    trendDiagramTitle: "Tạo Diagram",
    trendDiagramDesc: "Tạo sơ đồ phân tích kiến trúc.",
    trendAnalyzeTitle: "Phân tích hình khối",
    trendAnalyzeDesc: "Phân tích hình khối và kiến trúc từ ảnh.",
    trendMoodboardTitle: "Moodboard",
    trendMoodboardDesc: "Tạo bảng ý tưởng và vật liệu.",
    textureMapTitle: "Tạo Texture Vật liệu",
    textureMapDesc: "Tạo các kênh map (Diffuse, Normal, Displacement...) từ ảnh vật liệu để render.",
    textureMapStep1: "1. Tải ảnh vật liệu",
    textureMapStep2: "2. Crop vùng texture (Tùy chọn)",
    textureMapStep3: "3. Chọn các kênh map",
    textureMapEmptyHeader: "Texture của bạn",
    textureMapEmptyText: "Tải ảnh và chọn vùng vật liệu để bắt đầu tạo map.",
    generateMaps: "Tạo Texture Maps",
    generatingMaps: "Đang tính toán các kênh map...",
    engineeredPrompts: {
        zoomMagnifyPrompt: `Bạn là chuyên gia siêu phân giải và nhiếp ảnh kiến trúc. Nhiệm vụ: "Render cận cảnh" (Close-up) vùng ảnh được cung cấp.
**YÊU CẦU BẮT BUỘC**:
1. GIỮ NGUYÊN 100% hình khối kiến trúc, các đường nét hình học, và vị trí các chi tiết từ ảnh gốc. Không được thêm bớt hay làm sai lệch cấu trúc vật lý.
2. Tái tạo bề mặt vật liệu (texture) cực kỳ sắc nét: vân gỗ, vân đá, thớ vải, độ bóng gương, độ nhám bề mặt phải trung thực và chi tiết hơn ảnh gốc.
3. Bạn có thể thay đổi góc nhìn camera một cách tinh tế (ví dụ: góc nghiêng nghệ thuật, chụp từ dưới lên) để tạo ra một bức ảnh chụp chi tiết kiến trúc chuyên nghiệp hơn, but phải đảm bảo người xem vẫn nhận ra ngay lập tức đây là cùng một đối tượng trong ảnh gốc.
4. Ánh sáng và màu sắc phải thống nhất hoàn toàn with không gian tổng thể.
Kết quả: Ảnh chụp macro kiến trúc siêu thực, độ phân giải cao, chi tiết tuyệt đối.`,
        analyzeCharacterPrompt: "Phân tích người trong ảnh. Mô tả ngoại hình tập trung vào: tóc, da, quần áo dưới 20 từ. Chỉ xuất văn bản thô, không thêm lời dẫn.",
        analyzeAreaPrompt: `Hãy đóng vai một chuyên gia nhiép ảnh kiến trúc và AI Prompt Engineer. Nhiệm vụ của bạn là phân tích một hình ảnh (được crop từ một ảnh lớn hơn) để viết một prompt mô tả cực kỳ chi tiết cho AI tạo ảnh.
YÊU CẦU CẤU TRÚC: "góc chụp cận cảnh tập trung vào chi tiết của [đối tượng], [đặc điểm của đối tượng đó (cụ thể, chất liệu, bề mặt vật liệu sắc nét, độ nhám, độ phản xạ)], [điều kiện ánh sáng và bóng đổ]".
YÊU CẦU ĐỘ DÀI: Câu trả lời phải dài từ 30 đến 50 từ tiếng Việt.
HÀNH VI: Tập trung đặc tả các chi tiết nhỏ mà ảnh gốc đang bị mờ. Mô tả các đường nét vật liệu như thể bạn đang nhìn chúng ở độ phân giải 8k. Không thêm bất kỳ lời dẫn nào (như "Đây là prompt:"), chỉ xuất ra nội dung mô tả duy nhất theo cấu trúc trên.`,
        applyLighting: `Bạn là một chuyên gia về ánh sáng và render kiến trúc. Người dùng đã cung cấp một hình ảnh và muốn thay đổi hoàn toàn kịch bản chiếu sáng của nó. Nhiệm vụ của bạn là render lại hình ảnh này with điều kiện ánh sáng mới được mô tả sau đây. **QUAN TRỌNG**: Bạn phải giữ nguyên 100% hình khối kiến trúc, vật liệu, và bố cục của hình ảnh gốc. Chỉ thay đổi ánh sáng, bóng đổ, và không khí tổng thể của cảnh. Kịch bản ánh sáng mong muốn là: "{0}".`,
        classifyImageTypePrompt: `Đây là hình ảnh nội thất hay ngoại thất? Chỉ trả lời bằng một từ duy nhất: 'interior' hoặc 'exterior'.`,
        generateInteriorVariation: `Bạn là một Kiến trúc sư nội thất chuyên nghiệp. Bạn được cung cấp một hình ảnh mẫu đại diện cho style, màu sắc và vật liệu. Nhiệm vụ của bạn là tưởng tượng và vẽ ra một không gian khác trong cùng ngôi nhà đó.
YÊU CẦU:
- GIỮ NGUYÊN Style thiết kế (ví dụ: Japandi, Industrial, Tân cổ điển...).
- GIỮ NGUYÊN Bảng màu chủ đạo (ví dụ: Gỗ óc chó + Da bò + Xám bê tông).
- GIỮ NGUYÊN Tính chất vật liệu (độ bóng, độ nhám, vân gỗ).
- KHÔNG GIAN CẦN TẠO: "{0}".
{1}
Hãy vẽ một bức ảnh chụp nhiếp ảnh kiến trúc chuyên nghiệp, thực tế, 8k, ánh sáng ban ngày tự nhiên dịu nhẹ.`,
        generateArchitectureVariation: `Bạn là một Kiến trúc sư chuyên nghiệp. Bạn được cung cấp một hình ảnh mẫu kiến trúc đại diện cho 100% hình khối và chi tiết thực tế. Nhiệm vụ của bạn là vẽ lại một view kiến trúc cụ thể (cận cảnh hoặc nghệ thuật) từ công trình này.
YÊU CẦU:
- GIỮ NGUYÊN 100% mọi chi tiết kiến trúc, hình khối, vật liệu và cấu trúc từ ảnh mẫu.
- TUYỆT ĐỐI KHÔNG vẽ thêm, không sáng tạo chi tiết mới, không thay đổi cấu kiện nếu không có trong ảnh gốc. Chỉ được phép lấy đúng những gì đang có trên công trình gốc để thể hiện.
- Đối với các view CẬN CẢNH và NGHỆ THUẬT: Bạn chỉ được phép tập trung vào những thành phần hiện hữu của công trình, không được phép nội suy hay sử dụng chi tiết lạ.
- Bạn chỉ được phép thay đổi góc máy, tiêu cự ống kính, và điều kiện ánh sáng để tạo ra bức ảnh nhiếp ảnh kiến trúc chuyên nghiệp.
- VIEW CẦN TẠO: "{0}".
{1}
Kết quả phải là một ảnh chụp thực tế, 8k, sắc nét tuyệt đối.`,
        generateArchToInterior: `Bạn là một Kiến trúc sư and Nhà thiết kế nội thất tài ba. Bạn được cung cấp một hình ảnh NGOẠI THẤT của một công trình kiến trúc. Nhiệm vụ của bạn là thiết kế and vẽ ra không gian NỘI THẤT bên trong công trình đó.
YÊU CẦU:
- PHONG CÁCH: Nội thất phải hoàn toàn đồng nhất with phong cách kiến trúc ngoại thất (ví dụ: nếu kiến trúc hiện đại tối giản thì nội thất cũng phải hiện đại tối giản).
- HỆ CỬA SỔ: Nếu không gian có cửa sổ, kiểu dáng khung cửa, vật liệu and tỷ lệ của cửa sổ PHẢI giống hệt with hệ cửa sổ thấy được ở mặt tiền kiến trúc trong ảnh gốc.
- VẬT LIỆU: Sử dụng bảng vật liệu and màu sắc tương đồng with ngoại thất để tạo sự xuyên suốt.
- KHÔNG GIAN CẦN TẠO: "{0}".
{1}
Kết quả là một bức ảnh chụp nhiếp ảnh nội thất chuyên nghiệp, 8k, ánh sáng ban ngày tự nhiên cực kỳ chân thực.`,
        syncViewPrompt: `Bạn là một chuyên gia Render AI chuyên nghiệp. Bạn được cung cấp 2 hình ảnh.
HÌNH ẢNH 1: Là View Mẫu (Style Reference). Bạn hãy phân tích và ghi nhớ thật kỹ: màu sắc chủ đạo, vật liệu (gỗ, đá, vải...), ánh sáng (hướng sáng, nhiệt độ màu, độ tương phản), bối cảnh (environment, cảnh quan) và phong cách thiết kế tổng thể.
HÌNH ẢNH 2: Là View Cần Đồng Bộ (Source Geometry).
NHIỆM VỤ: Render lại HÌNH ẢNH 2 sao cho:
1. GIỮ NGUYÊN 100% góc máy camera, hình khối kiến trúc, và các chi tiết hiện có trong HÌNH ẢNH 2.
2. ÁP DỤNG TOÀN BỘ màu sắc, vật liệu, kịch bản ánh sáng và không khí bối cảnh từ HÌNH ẢNH 1 vào không gian của HÌNH ẢNH 2.
Kết quả phải là một ảnh chụp thực tế, 8k, cực kỳ chân thực, thể hiện sự đồng nhất hoàn hảo về mặt thị giác with View Mẫu.`,
        lightingSimulationPrompt: `Bạn là một chuyên gia về diễn họa kiến trúc và ánh sáng. Bạn được cung cấp 2 hình ảnh.
HÌNH ẢNH 1: Là Mẫu Ánh Sáng và Style (Mood Reference). Hãy phân tích thật kỹ kịch bản chiếu sáng (lighting setup), tông màu (color grading), độ tương phản (contrast) và phong cách diễn họa (render style - ví dụ: photorealistic, sketchy, watercolor, cinematic).
HÌNH ẢNH 2: Là Phối Cảnh Hiện Có (Base Image).
NHIỆM VỤ: Vẽ lại HÌNH ẢNH 2 sao cho:
1. GIỮ NGUYÊN 100% hình khối kiến trúc, các chi tiết nội thất/kiến trúc, vật liệu (textures) và góc máy camera từ HÌNH ẢNH 2. Tuyệt đối không thêm bớt vật thể hay thay đổi vật liệu.
2. CHỈ THAY ĐỔI mood ánh sáng, tông màu và phong cách diễn họa để giống hệt HÌNH ẢNH 1.
Kết quả phải là một tác phẩm diễn họa có sự tương đồng tuyệt đối về mặt cảm xúc và phong cách trình bày với Ảnh Tham Khảo.`,
        constructionMessy: `Bạn là một AI chỉnh sửa ảnh kiến trúc. Hãy vẽ lại hình ảnh công trình này ở giai đoạn hiện trạng mặt bằng chưa xây dựng. 
YÊU CẦU:
- GIỮ NGUYÊN 100% bối cảnh xung quanh, bầu trời và góc máy camera.
- THAY THẾ vị trí của công trình chính bằng một khu đất trống bừa bãi, ngổn ngang đất đá, xà bần, gạch vụn và cỏ dại. Có thể có một vài tấm lán tạm cho công nhân.
- Tạo cảm giác một công trường chưa được dọn dẹp, hoang sơ trước khi khởi công.`,
        constructionCleaned: `Bạn là một AI chỉnh sửa ảnh kiến trúc. Hãy vẽ lại hình ảnh công trình này ở giai đoạn mặt bằng đã được dọn dẹp sạch sẽ.
YÊU CẦU:
- GIỮ NGUYÊN 100% bối cảnh xung quanh và góc máy camera.
- THAY THẾ công trình chính bằng một nền đất phẳng đã được san lấp, dọn sạch xà bần. 
- Có hàng rào tôn bao quanh công trường. Mặt bằng trông ngăn nắp, sẵn sàng để ép cọc và đào móng.`,
        constructionRough: `Bạn là một AI chỉnh sửa ảnh kiến trúc. Hãy vẽ lại công trình này ở giai đoạn XÂY THÔ.
YÊU CẦU:
- GIỮ NGUYÊN 100% hình khối kiến trúc, vị trí các ô cửa và góc máy camera.
- THAY THẾ toàn bộ bề mặt hoàn thiện bằng vật liệu THÔ: tường gạch đỏ chưa trát (naked brick walls), các cột và dầm bê tông xám lộ ra (exposed concrete beams/columns). 
- Không có sơn, không có kính cửa, không có lan can. Có thể có giàn giáo gỗ hoặc sắt bao quanh.
- Kết quả trông như một công trình đang trong giai đoạn thi công khung xương.`,
        constructionFinishing: `Bạn là một AI chỉnh sửa ảnh kiến trúc. Hãy vẽ lại công trình này ở giai đoạn HOÀN THIỆN CƠ BẢN.
YÊU CẦU:
- GIỮ NGUYÊN 100% hình khối kiến trúc và góc máy.
- CÔNG TRÌNH: Tường đã được trát phẳng và sơn màu hoàn thiện theo mẫu. Các hệ cửa nhôm kính đã được lắp đặt đầy đủ.
- NGOẠI CẢNH: Phần sân và vườn chưa có cây xanh, vẫn là nền bê tông hoặc đất trống. Chưa có cổng rào hay decor trang trí ngoại thất.
- Trông như ngôi nhà vừa mới xây xong phần xác and lắp cửa nhưng chưa làm cảnh quan.`,
        constructionLandscape: `Bạn là một AI chỉnh sửa ảnh kiến trúc. Hãy vẽ lại công trình này ở giai đoạn HOÀN THIỆN TOÀN BỘ CẢNH QUAN.
YÊU CẦU:
- GIỮ NGUYÊN công trình kiến trúc như ảnh gốc.
- THÊM TOÀN BỘ phần cảnh quan: sân lát đá, thảm cỏ xanh mướt, bồn hoa, cây bóng mát lớn, hệ thống đèn sân vườn và cổng tường rào thẩm mỹ.
- Kết quả là một bức ảnh nhiếp ảnh kiến trúc thực tế, lung linh, thể hiện công trình ở trạng thái đẹp nhất sau khi đưa vào sử dụng.`,
        watercolorSketchPrompt: `Bạn là một họa sĩ diễn họa kiến trúc bậc thầy. Hãy chuyển đổi hình ảnh này thành một bức phác thảo màu nước (watercolor sketch) vẽ tay chuyên nghiệp. 
YÊU CẦU BẮT BUỘC: 
1. GIỮ NGUYÊN 100% hình khối, tỷ lệ và chi tiết kiến trúc từ ảnh gốc. Không được biến dạng hay thêm bớt cấu trúc vật lý.
2. GIỮ NGUYÊN bảng màu gốc của công trình và bối cảnh.
3. THỂ HIỆN bằng những nét vẽ bút chì/bút mực tay sắc sảo kết hợp hiệu ứng loang màu nước nghệ thuật trên nền giấy textured. 
Kết quả là một tác phẩm nghệ thuật sketch kiến trúc siêu thực, đầy cảm xúc và sang trọng.`,
        trendLayoutPrompt: "Dàn trang bản vẽ kiến trúc chuyên nghiệp, layout portfolio, trình bày đồ án với các ghi chú, mặt bằng, phối cảnh và sơ đồ kết hợp hài hòa trên nền trắng sạch sẽ.",
        trendModelPrompt: "Bản vẽ kỹ thuật chiếu vuông góc, mặt đứng, mặt cắt kiến trúc chi tiết, nét vẽ kỹ thuật sắc nét trên nền trắng, phong cách bản vẽ CAD chuyên nghiệp.",
        trendDiagramPrompt: "Sơ đồ phân tích kiến trúc, diagram khối (massing diagram), mũi tên chỉ dẫn luồng giao thông, phân tích nắng gió, phong cách tối giản, màu sắc đồ họa.",
        trendAnalyzePrompt: "Phân tích hình khối kiến trúc, bóc tách cấu tạo (exploded axonometric), thể hiện các lớp vật liệu và cấu trúc bên trong công trình.",
        trendMoodboardPrompt: "Bảng moodboard vật liệu kiến trúc, mẫu vải, gỗ, đá, bảng màu và hình ảnh cảm hứng được sắp xếp tinh tế trong một khung hình.",
        planTo3dRenderPrompt: 'Bạn là một kiến trúc sư AI chuyên nghiệp, chuyên chuyển đổi các bản vẽ mặt bằng 2D thành các ảnh render nội thất 3D siêu thực. Bạn có khả năng nhận diện các không gian, đồ đạc và vật liệu từ bản vẽ kỹ thuật để tạo ra một không gian sống động, chân thực. Yêu cầu của người dùng là: "{0}".',
        planTo3dColorizePrompt: 'Bạn là một trợ lý AI cho kiến trúc sư. Nhiệm vụ của bạn là tô màu cho một bản vẽ mặt bằng 2D đen trắng để biến nó thành một bản vẽ mặt bằng sinh động, dễ hiểu, thể hiện rõ các khu vực chức năng, vật liệu sàn và đồ nội thất. Yêu cầu của người dùng là: "{0}".',
        interiorViewWithCharacter: "THÊM NHÂN VẬT: Hãy đưa nhân vật trong ảnh thứ hai vào không gian một cách tự nhiên. Nhân vật nên {action}. Đảm bảo trang phục and ngoại hình của nhân vật thống nhất with ảnh nhân vật được cung cấp.",
        architectureViewWithCharacter: "THÊM NHÂN VẬT: Hãy đưa nhân vật trong ảnh thứ hai vào bối cảnh kiến trúc một cách tự nhiên (ví dụ: đang đi bộ trước sảnh, đứng ở ban công, hoặc đi dạo trong sân vườn). Đảm bảo trang phục and ngoại hình thống nhất with ảnh nhân vật.",
        generateFromImageInterior: `Bạn là một chuyên gia thiết kế nội thất và diễn họa 3D đẳng cấp thế giới với 20 năm kinh nghiệm. Nhiệm vụ của bạn là phân tích hình ảnh được cung cấp (render 3D, phác thảo hoặc ảnh chụp) và viết một prompt "ma thuật" cực kỳ chi tiết cho AI tạo ảnh.
Prompt nên dưới 150 từ và tuân theo cấu trúc sau:
1. **Đối tượng chính**: Một bức ảnh nhiếp ảnh kiến trúc chuyên nghiệp về [loại phòng], [phong cách thiết kế].
2. **Vật liệu**: Mô tả các kết cấu và vật liệu cực kỳ chi tiết (ví dụ: "sofa vải lanh dệt thô với kết cấu sợi rõ rệt", "đá cẩm thạch Calacatta trắng được mài bóng với vân xám mềm mại", "sàn gỗ óc chó xương cá ấm áp").
3. **Ánh sáng**: Mô tả ánh sáng điện ảnh (ví dụ: "Tia sáng Volumetric God Rays", "Ánh sáng Golden Hour rực rỡ", "Ánh sáng ban ngày khuếch tán mềm mại qua rèm thưa").
4. **Không khí**: Thêm các chi tiết không khí như "hạt bụi lơ lửng", "hiệu ứng lóe sáng nhẹ của ống kính", hoặc "không khí buổi sáng trong lành".
5. **Camera**: Chỉ định thiết lập camera chuyên nghiệp (ví dụ: "Wide Shot 24mm", "Góc nhìn ngang tầm mắt", "độ phân giải 8k", "phong cách nhiếp ảnh kiến trúc").

**BẮT BUỘC**:
- Giữ nguyên 100% hình khối, vật liệu và bố cục đồng nhất với hình ảnh đã tải lên.
- Chọn ánh sáng khiến kết quả trông giống như một bức ảnh chụp thực tế, cao cấp.
- KHÔNG thêm bất kỳ văn bản giới thiệu nào. CHỈ trả về prompt.`,
        generateFromKeywordsInterior: `Bạn là một nhà thiết kế nội thất bậc thầy và chuyên gia prompt AI. Dựa trên các từ khóa của người dùng, hãy tạo một prompt chi tiết, sống động cho một không gian nội thất cao cấp.
Tập trung vào:
- **Phong cách**: Chuyển đổi từ khóa thành một ngôn ngữ thiết kế gắn kết (ví dụ: Japandi, Industrial, Luxury).
- **Vật liệu**: Nhấn mạnh vào tính thực tế của xúc giác (ví dụ: "vân gỗ sồi tự nhiên", "bề mặt đá cẩm thạch mờ", "kết cấu nhung mềm mại").
- **Ánh sáng**: Luôn sử dụng ánh sáng ban ngày tự nhiên, mềm mại để có vẻ ngoài sạch sẽ, cao cấp.
- **Camera**: Mô tả một bố cục kiến trúc chuyên nghiệp.

**Từ khóa**: "{0}"

**BẮT BUỘC**:
- KHÔNG mô tả bối cảnh bên ngoài (ví dụ: view thành phố, sân vườn). Chỉ tập trung hoàn toàn vào nội thất.
- CHỈ trả về prompt.`,
        generateWithReference: `Prompt của người dùng là: "{0}". Với vai trò là một AI render kiến trúc, nhiệm vụ của bạn là kết hợp một bản phác thảo cấu trúc with một ảnh tham chiếu phong cách. Ảnh đầu tiên là bản phác thảo cấu trúc. Ảnh thứ hai là ảnh tham chiếu về phong cách, ánh sáng, bối cảnh and vật liệu. Bạn phải áp dụng không khí, ánh sáng, bảng màu, vật liệu and cảnh quan xung quanh từ ảnh thứ hai vào công trình từ bản phác thảo đầu tiên. Nghiêm cấm sao chép hình dạng kiến trúc chính từ ảnh tham chiếu phong cách thứ hai, nhưng bạn nên áp dụng môi trường tổng thể and kết cấu của nó. Kết quả render cuối cùng phải là một ảnh ngoại thất dựa trên prompt của người dùng.`,
        generateWithReferenceNegative: `Prompt của người dùng là: "{0}". Với vai trò là một AI render kiến trúc, nhiệm vụ của bạn là kết hợp một bản phác thảo cấu trúc with một ảnh tham chiếu phong cách. Ảnh đầu tiên là bản phác thảo cấu trúc. Ảnh thứ hai là ảnh tham chiếu về phong cách, ánh sáng, bối cảnh and vật liệu. Bạn phải áp dụng không khí, ánh sáng, bảng màu, vật liệu and cảnh quan xung quanh từ ảnh thứ hai vào công trình từ bản phác thảo đầu tiên. Nghiêm cấm sao chép hình dạng kiến trúc chính từ ảnh tham chiếu phong cách thứ hai, nhưng bạn nên áp dụng môi trường tổng thể and kết cấu của nó. Kết quả render cuối cùng phải là một ảnh ngoại thất dựa trên prompt của người dùng. QUAN TRỌNG: Người dùng đã chỉ định những điều cần TRÁNH. Bạn tuyệt đối KHÔNG ĐƯỢỢC bao gồm bất kỳ yếu loa nào sau đây trong hình ảnh: "{1}".`,
        generateWithoutReference: `Prompt của người dùng là: "{0}". Bạn đang tạo một bản render kiến trúc thực tế. Hình ảnh được cung cấp là điểm tham chiếu tuyệt đối về hình khối và chi tiết (không được coi là phác thảo). Hãy tạo ra một hình ảnh chân thực dựa trên bản gốc này and prompt của người dùng.`,
        generateWithoutReferenceNegative: `Prompt của người dùng là: "{0}". Bạn đang tạo một bản render kiến trúc thực tế. Hình ảnh được cung cấp là điểm tham chiếu tuyệt đối về hình khối và chi tiết (không được coi là phác thảo). Hãy tạo ra một hình ảnh chân thực dựa trên bản gốc này and prompt của người dùng. QUAN TRỌNG: Người dùng đã chỉ định những điều cần TRÁNH. Bạn tuyệt đối KHÔNG ĐƯỢC bao gồm bất kỳ yếu tố nào sau đây trong hình ảnh: "{1}".`,
        generateFromImage: `Bạn là một nhiếp ảnh gia kiến trúc đẳng cấp thế giới và chuyên gia prompt AI với 20 năm kinh nghiệm. Nhiệm vụ của bạn là phân tích hình ảnh được cung cấp (render 3D, phác thảo hoặc ảnh chụp) và viết một prompt "ma thuật" cực kỳ chi tiết cho AI tạo ảnh.
Prompt nên dưới 150 từ và tuân theo cấu trúc sau:
1. **Đối tượng chính**: Một bức ảnh nhiếp ảnh kiến trúc chuyên nghiệp về [loại công trình], [phong cách thiết kế].
2. **Vật liệu**: Mô tả các kết cấu và vật liệu cực kỳ chi tiết (ví dụ: "vách gỗ tuyết tùng phong hóa", "bê tông trần thô mộc", "kính kịch trần phản chiếu").
3. **Ánh sáng**: Mô tả ánh sáng điện ảnh (ví dụ: "Ánh sáng Golden Hour rực rỡ", "Hoàng hôn kịch tính với bóng đổ dài", "Ánh sáng u ám mềm mại cho tông màu đồng nhất").
4. **Bối cảnh**: Tạo một môi trường tươi tốt, thực tế (ví dụ: "vườn nhiệt đới xanh mát", "con phố Việt Nam yên tĩnh lát đá", "phông nền núi non mờ ảo").
5. **Camera**: Chỉ định thiết lập camera chuyên nghiệp (ví dụ: "Wide Shot", "Góc nhìn thấp", "Ống kính tilt-shift cho các đường thẳng đứng", "độ phân giải 8k").

**BẮT BUỘC**:
- Giữ nguyên 100% hình khối và vật liệu đồng nhất với hình ảnh đã tải lên.
- Tạo một bối cảnh mang lại cảm giác thực tế và cao cấp, ưu tiên lấy cảm hứng từ kiến trúc Việt Nam hiện đại.
- TUYỆT ĐỐI KHÔNG có dây điện, biển báo lộn xộn hoặc đống đổ nát đô thị gây xao nhãng.
- CHỈ trả về prompt và thêm cụm từ: "giữ nguyên chi tiết gốc ảnh tải lên".`,
        generateFromKeywords: `Bạn là một kiến trúc sư bậc thầy và chuyên gia diễn họa AI. Dựa trên các từ khóa của người dùng, hãy tạo một prompt chi tiết, sống động cho một dự án kiến trúc cao cấp.
Tập trung vào:
- **Phong cách**: Chuyển đổi từ khóa thành một ngôn ngữ kiến trúc gắn kết.
- **Bối cảnh**: Tạo một môi trường đẹp, thực tế, ưu tiên lấy cảm hứng từ các địa điểm cao cấp tại Việt Nam.
- **Ánh sáng**: Sử dụng ánh sáng điện ảnh (ví dụ: Golden Hour, ánh sáng Volumetric) để làm nổi bật hình khối của tòa nhà.
- **Camera**: Mô tả một bố cục kiến trúc chuyên nghiệp.

**Từ khóa**: "{0}"

**BẮT BUỘC**:
- CHỈ trả về prompt.`,
        editWithReference: `**CRITICAL INPAINTING DIRECTIVE WITH STYLE REFERENCE**
You are provided with 3 inputs: Original Image, Mask (White=Edit), and Style Reference.
Task: Completely replace content in the White masked area to match the user request: "{0}".
- Use the Style Reference for materials/lighting/vibe.
- PRESERVE the Black masked area exactly.
- Ensure seamless blending.`,
        editWithoutReference: `**INPAINTING GENERATION**
Input: Original Image + Mask (White = Edit, Black = Keep).
Task: Completely replace the content in the White masked area to match this description: "{0}".
Constraints:
- The Black area must be preserved 100%.
- The new content must fit the perspective and lighting of the original image.
- Make it realistic and high quality.`,
        smartEditPrompt: `**SMART LOCALIZED INPAINTING**
Bạn đang làm việc trên một vùng ảnh crop độ phân giải cao. Nhiệm vụ của bạn là vẽ lại phần được tô MASK (màu trắng) một cách cực kỳ chi tiết and chân thực theo mô tả: "{0}".
YÊU CẦU:
- Chỉ thay đổi những gì nằm trong vùng MASK.
- Giữ nguyên bố cục and phối cảnh của phần ảnh xung quanh trong khung crop.
- Kết quả phải hòa hợp hoàn hảo with ánh sáng and vật liệu hiện có.
- Độ chi tiết cực cao, sắc nét từng pixel.`,
        placeAndRenderFurniture: `
**CRITICAL PHOTOREALISTIC COMPOSITION TASK: ABSOLUTE SCALE PRESERVATION**

You are a master AI of optical art and photorealistic composition. Your task is to seamlessly integrate one or more objects into a background image while STRICTLY ADHERING to the user's layout.

**Inputs:**
1.  **Background Image**: The main scene.
2.  **Object(s) Image(s)**: Subsequent PNG images (with transparency) to be placed into the background.
3.  **Placement Data (JSON)**: Contains the non-negotiable coordinates, scale, and rotation.

**MANDATORY REQUIREMENTS (FAIL IF IGNORED):**
1.  **STRICT COORDINATES & SCALE**: You MUST place the center of each object exactly at the provided \`pos\` coordinates. You MUST render the object at the exact \`scale\` (percentage of background width) specified. DO NOT "intelligently" resize or move objects. The user's placement is the absolute ground truth.
2.  **PHOTOREALISTIC HARMONIZATION**: While scale/pos are fixed, you must adjust the LIGHTING, SHADOWS, and REFLECTIONS to make the object look like it truly exists in the scene.
    - Match the background's light source direction and temperature.
    - Cast soft, realistic contact shadows on the floor/surfaces below the objects.
    - Ensure the object receives environmental reflections from the background.
3.  **EDGE BLENDING**: Perform pixel-perfect blending at the edges of the objects to remove any traces of "pasting" or "cut-out" appearance. Ensure consistent grain and sharpness.
4.  **PERSPECTIVE WARPING**: You may subtly warp the object's geometry to match the background's vanishing points, but ONLY if it does not change the perceived 2D position or footprint scale set by the user.

**Placement Data:**
\`\`\`json
{0}
\`\`\`
`,
        generateArchitecturalPrompts: `Đóng vai một nhiếp ảnh gia chuyên nghiệp with hơn 20 năm kinh nghiệm trong lĩnh vực chụp ảnh kiến trúc, nội thất, cảnh quan, quy hoạch and resort, từng đạt nhiều giải thưởng nhiếp ảnh quốc tế.

Bạn đồng thời là một chuyên gia Prompt Engineer & AI Visual Prompt Designer, am hiểu sâu về ngôn ngữ mô tả hình ảnh, bố cục thị giác, ánh sáng, không gian, tỷ lệ and cảm xúc hình ảnh trong các tạp chí kiến trúc hàng đầu thế giới như ArchDaily, Dezeen, Architectural Digest, Wallpaper, Dwell…

Tôi sẽ tải lên một hình ảnh công trình (kiến trúc hoặc nội thất). Hãy tưởng tượng bạn đang thật sự đứng trong không gian đó with chiếc máy ảnh chuyên dụng (Canon R5 hoặc Nikon Z9, ống kính tilt-shift and ống kính góc rộng – tele tuỳ cảnh).

INPUT PHỤ (Tùy chọn): Mô tả nhân vật: {0}.
YÊU CẦU: Nếu có mô tả nhân vật, hãy thay thế các từ chung chung như "người", "con người" trong các nhóm (2) Trung cảnh and (4) Nghệ thuật bằng mô tả cụ thể này.

Dựa trên kinh nghiệm nhiếp ảnh quốc tế and phong cách hình ảnh của các tạp chí kiến trúc đương đại, hãy phân tích hình ảnh được tải lên, rồi đề xuất cho tôi 20 góc chụp nghệ thuật ấn tượng nhất của công trình này.

Mỗi góc chụp được viết dưới dạng prompt tạo ảnh cho AI Nano Banana, mô tả cụ thể về góc máy, ánh sáng, thời tiết, bố cục, ống kính, cảm xúc hình ảnh, không viết dưới dạng JSON.

Phân chia rõ 4 nhóm góc cơ bản như sau:

1️⃣ 5 góc toàn cảnh (wide shots)
• Diễn tả tổng thể công trình and cảnh quan xung quanh.
• Mỗi góc nên có hiệu ứng ánh sáng and thời tiết khác nhau: bình minh, buổi trưa, hoàng hôn, đêm, trời mưa hoặc sương sớm.
• Nêu rõ hướng sáng, góc chụp (ví dụ: chụp từ trên cao, ngang tầm mắt, chéo góc 45 độ, từ phía lối vào…).

2️⃣ 5 góc trung cảnh (medium shots)
• Tập trung vào mối quan hệ giữa không gian and con người. Mỗi góc chụp PHẢI có yếu tố con người trong đó (ví dụ: một người đang đọc sách, đi dạo, hoặc tương tác with không gian).
• Mô tả bố cục, chiều sâu, phối cảnh ánh sáng, chất liệu, bóng đổ, tương phản.
• Bắt buộc: Người trong ảnh phải đang hoạt động ở BÊN TRONG công trình (ví dụ: trong phòng khách, sảnh, hành lang, ban công...), không được đứng ở ngoài đường hay xa công trình.

3️⃣ 5 góc chụp cận cảnh chi tiết (detailed close-up shots)
• Tập trung vào chi tiết vật liệu, cấu tạo kiến trúc nghệ thuật và những điểm nhấn kiến trúc tinh xảo.
• Có thể là các chi tiết tay nắm cửa, vân gỗ, các khớp nối kim loại, hoặc hiệu ứng ánh sáng trên bề mặt vật liệu đặc biệt.

4️⃣ 5 góc máy nghệ thuật (artistic shots)
• Lấy nét vào các đối tượng chính như người (sử dụng mô tả nhân vật nếu có), lá cây, bird, xe cộ. Đối tượng lấy nét sẽ chiếm tỉ lệ lớn trong khung hình. Công trình chính sẽ bị làm mờ (blur) ở phía sau, tạo hiệu ứng chiều sâu (foreground – background tách biệt).

🔴 YÊU CẦU BỔ SUNG NẾU LÀ RESORT/QUY HOẠCH:
Nếu bạn phân tích thấy bức ảnh là Tổng mặt bằng quy hoạch (Masterplan) hoặc Phối cảnh tổng thể Resort/Khu đô thị, BẮT BUỘC thêm nhóm thứ 5:

5️⃣ 5 Mô tả chi tiết công trình đơn lẻ (Specific Structure Prompts)
• Từ tổng thể quy hoạch, hãy trích xuất and tưởng tượng ra kiến trúc chi tiết của 5 hạng mục công trình quan trọng nhất (Ví dụ: Biệt thự điển hình, Clubhouse, Nhà hàng, Cổng chào, Khu tiện ích...).
• Viết prompt để render ra view cận cảnh của riêng công trình đó.
• Mô tả rõ: Kiến trúc, vật liệu, mood, and cảnh quan sát quanh nó.

Yêu cầu chi tiết cho mỗi góc chụp:
• Viết bằng tiếng Việt mô tả ngắn gọn, súc tích, gợi hình mạnh.
• Không dùng định dạng JSON, chỉ mô tả text.
• Ưu tiên dùng ngôn ngữ cảm xúc, thị giác and kỹ thuật nhiếp ảnh (ví dụ: ánh sáng xiên, khung hình dẫn mắt, tiền cảnh mờ, hậu cảnh sâu, góc ống kính tilt-shift, dynamic composition, depth of field, cinematic tone…).
• Mục tiêu: tái hiện cảm xúc, ánh sáng and nghệ thuật nhiếp ảnh chân thực nhất – giúp AI Nano Banana tạo ra hình ảnh sống động, có chiều sâu, mang phong cách nhiếp ảnh chuyên nghiệp and tạp chí quốc tế.
Quan trọng: Chỉ trả về các nhóm góc chụp như đã yêu cầu. Không thêm bất kỳ lời dẫn, giới thiệu, hay kết luận nào.`,
        generateFromPlan: `Từ giờ, bạn hãy đóng vai một chuyên gia thiết kế nội thất đồng thời là chuyên gia viết prompt tạo ảnh cho các AI tạo hình (như Midjourney, DALL-E, v.v.). Bạn có kỹ năng chuyên sâu về bố cục, hình khối, and phân tích mặt bằng kiến trúc.

Nhiệm vụ của bạn là:

Tự nhận định loại phòng dựa trên mặt bằng tôi tải lên (ví dụ: Phòng Khách, Phòng Ngủ Master, Bếp & Phòng Ăn).

Phân tích mặt bằng để xác định vị liệu đồ đạc chính (giường, sofa, tủ, bàn ăn, bếp, v.v.) and góc nhìn chính diện tiêu chuẩn.

Viết prompt tạo ảnh (bằng tiếng Việt) theo format nghiêm ngặt sau:

Góc nhìn: Luôn là góc nhìn chính diện (trực diện), không mô tả hướng nhìn camera phức tạp (ví dụ: không dùng "nhìn từ dưới lên").

Nội dung: Mô tả vị trí and loại đồ đạc có trong khung hình theo góc nhìn chính diện.

Cấm kỵ: Tuyệt đối không mô tả màu sắc, vật liệu, chất liệu. Không mô tả đồ vật nằm ngoài khung hình chính diện (ví dụ: trong phòng ngủ nhìn đầu giường thì không mô tả kệ TV).

Format đầu ra: Chỉ hiển thị duy nhất prompt đã hoàn chỉnh, bắt đầu bằng cụm từ:

Tạo phối cảnh nội thất view nhìn chính diện của không gian mặt bằng. Đó là [Loại phòng bạn đã nhận định]. View nhìn trực diện vào... [Mô tả chi tiết vị trí đồ đạc]. Sử dụng hình moodboard làm tham chiếu cho phối cảnh nội thất này. Hãy làm cho nó chân thực như một hình ảnh trực quan kiến trúc with các kết cấu and chi tiết cụ thể.

không được hiển thị phần phân tích chỉ được hiển thị phần Prompt`,
        analyzePlanStyle: `Bạn là một chuyên gia diễn họa mặt bằng nội thất cho các căn hộ bds dạng đổ màu mặt bằng, mặt bằng 3d, và view mặt bằng cắt nóc. Bạn am hiểu về chuyên sâu về viết prompt tạo ảnh cho AI Gemini.

Nhiệm vụ: Khi tôi tải 1 ảnh mặt bằng lên, bạn hãy phân tích style thể hiện, màu sắc, ánh sáng của mặt bằng đó.

Lưu ý quan trọng: Bạn phải nhận diện đúng style thể hiện là:
- Mặt bằng 2D đổ màu kỹ thuật.
- Mặt bằng 3D nhìn từ trên xuống (top-down view).
- Ảnh chụp thực tế không gian nội thất từ trên cao.
- View mặt bằng cắt nóc (3D cutaway).

Mục tiêu: Viết một đoạn prompt chuyên dụng bằng tiếng Việt để tôi có thể dùng Prompt đó tạo ảnh từ một ảnh mặt bằng 2D đầu vào sao cho kết quả ra đúng style, màu sắc và ánh sáng của ảnh mẫu bạn vừa phân tích. 

Yêu cầu output: 
- Kết quả bằng tiếng Việt.
- Prompt chuyên dụng cho AI Nano Banana (Gemini 2.5 Flash).
- Câu lệnh phải mang tính tổng quát để có thể áp dụng cho nhiều mặt bằng khác nhau nhưng vẫn giữ đúng style mẫu.
- KHÔNG hiển thị phân tích, KHÔNG lời dẫn, CHỈ hiển thị duy nhất nội dung Prompt.`,
        generateMoodboard: "Với vai trò là một nhà thiết kế nội thất chuyên nghiệp, hãy dựa vào hình ảnh and chủ đề do người dùng cung cấp: '{0}'. Nhiệm vụ của bạn là tạo ra một moodboard đẹp mắt. Moodboard phải bao gồm: một bảng màu được trích xuất từ hình ảnh, các hình ảnh truyền cảm hứng phù hợp with chủ đề, các mẫu vật liệu (vải, gỗ, kim loại), and các từ khóa liên quan. Sắp xếp các yếu tố này trong một bố cục sạch sẽ, hiện đại. Đầu ra cuối cùng phải là một hình ảnh moodboard duy nhất, gắn kết.",
        generateMoodboardWithReference: "Với vai trò là một nhà thiết kế chuyên nghiệp, bạn được cung cấp 2 hình ảnh and 1 chủ đề. HÌNH ẢNH 1 là nguồn cảm hứng chính cho **chủ đề and đối tượng**. HÌNH ẢNH 2 là nguồn tham chiếu cho **phong cách, bảng màu, and không khí**. Chủ đề là: '{0}'. Nhiệm vụ của bạn là tạo ra một moodboard đẹp mắt, kết hợp cả hai yếu tố. Moodboard phải bao gồm: một bảng màu được trích xuất from **hình ảnh tham chiếu phong cách**, các hình ảnh truyền cảm hứng phù hợp with **chủ đề from hình ảnh chính**, các mẫu vật liệu (vải, gỗ, kim loại), and các từ khóa liên quan. Sắp xếp các yếu tố này trong một bố cục sạch sẽ, hiện đại. Đầu ra cuối cùng phải là một hình ảnh moodboard duy nhất, gắn kết.",
        extendView: `Bạn là một chuyên gia chỉnh sửa ảnh AI with khả năng "outpainting". Người dùng đã cung cấp một hình ảnh có các vùng màu hồng fuchsia (#FF00FF) ở viền. Đây là một "màn hình xanh" chỉ định khu vực cần vẽ. Nhiệm vụ của bạn là thay thế TOÀN BỘ vùng màu hồng này bằng cách vẽ tiếp nội dung từ hình ảnh trung tâm một cách liền mạch and hợp lý. Phải giữ nguyên 100% nội dung của hình ảnh gốc ở trung tâm. Kết quả cuối cùng phải là một hình ảnh hoàn chỉnh, không còn bất kỳ màu hồng nào.`,
        changeStylePrompt: `Bạn là nhà thiết kế nội thất với hơn 20 năm kinh nghiệm, chuyên thiết kế không gian cao cấp và tư vấn chuyển đổi phong cách nội thất theo xu hướng quốc tế. Bạn có năng lực: Am hiểu chuyên sâu, hệ thống về mọi phong cách thiết kế nội thất (Modern, Minimalism, Japandi, Scandinavian, Wabi-sabi, Industrial, Neoclassical, Luxury, Contemporary, Mid-century, Tropical, Mediterranean, Retro, Vintage, Boho, Classic, Zen, Art Deco…). Tư duy thẩm mỹ cao, từng tham gia và đạt nhiều giải thưởng thiết kế nội thất quốc tế. Khả năng phân tích bố cục không gian từ ảnh, xác định rõ: màu sắc, ánh sáng, vật liệu, đồ nội thất, chi tiết trang trí. Chuyển đổi phân tích thành prompt tạo ảnh chuyên nghiệp dành cho AI Nano Banana, mô tả chính xác, giàu hình ảnh và tối ưu chất lượng đầu ra. Nhiệm vụ (Task): Khi người dùng tải ảnh nội thất và cung cấp phong cách mong muốn, bạn phải: Phân tích không gian trong ảnh gốc (bố cục, ánh sáng, vật liệu, đồ nội thất chính/phụ). Viết 01 đoạn prompt hoàn chỉnh để AI Nano Banana tạo ra phiên bản không gian theo phong cách nội thất được chỉ định. Prompt cần tập trung mạnh vào: Màu sắc chủ đạo & bảng màu theo style yêu cầu Chất liệu bề mặt (gỗ, đá, kim loại, vải, da, kính…) Chi tiết & thiết kế của đồ nội thất theo phong cách mới (form, đường nét, chân ghế, tay vịn, phom tủ, viền, bo cạnh…) Ánh sáng (tự nhiên/đèn/độ mềm, độ tương phản, mood) Không gian & cảm xúc tổng thể đúng phong cách Cho phép thay đổi/ thêm đồ nội thất nếu cần để đúng phong cách chỉ định, nhưng phải đảm bảo: Không phá vỡ bố cục chính của không gian Đồ nội thất bổ sung phải phù hợp with style, có mô tả rõ về chất liệu – màu – kiểu dáng Tổng thể vẫn giống một phiên bản “cùng không gian” nhưng được “styling lại” theo phong cách mới Quy tắc bắt buộc (Constraints): ✅ Chỉ xuất đúng phần PROMPT (không giải thích, không phân tích, không gợi ý thêm). ✅ Giữ đúng tinh thần và cấu trúc không gian gốc (không đổi layout quá mức). ✅ Được phép thay đổi chi tiết đồ nội thất và thêm đồ nội thất để đúng style chỉ định. ✅ Mọi thay đổi phải đồng nhất theo style: màu sắc – vật liệu – bề mặt – hoàn thiện – ánh sáng – hoạ tiết. ✅ Prompt phải ưu tiên tính chân thực cao, đúng ngữ cảnh nội thất, hình ảnh sắc nét. Đầu ra (Output): Một đoạn prompt hoàn chỉnh, sẵn sàng dán trực tiếp vào AI Nano Banana. Prompt rõ ràng, giàu mô tả, có cấu trúc tốt, tối ưu chất lượng đầu ra. Yêu cầu của người dùng là: "{0}"`,
        generateFromPlanningImage: `Hãy đóng vai một Kiến trúc sư Quy hoạch cao cấp với 20 năm kinh nghiệm và chuyên gia viết prompt chuyên nghiệp cho Gemini AI. Nhiệm vụ: Phân tích hình ảnh quy hoạch được tải lên (loại hình quy hoạch, phong cách, các công trình cụ thể, bối cảnh và ánh sáng phù hợp) sau đó viết một đoạn prompt tạo ảnh hoàn chỉnh bằng TIẾNG VIỆT để biến bản vẽ quy hoạch này thành một ảnh chụp kiến trúc thực tế. Cấu trúc: Ảnh chụp Master Plan thực tế góc nhìn chim bay từ trên cao của [loại hình quy hoạch], phong cách thiết kế, [Các hạng mục trong bản vẽ]. Tự sáng tạo bao cảnh và bối cảnh xung quanh cho phù hợp. Ánh sáng: Mô tả rõ ràng về ánh sáng (ví dụ: Ánh sáng Volumetric God Rays, Golden Hour, Ánh sáng Low-Key), góc máy (Wide Shot, Low Angle). Ưu tiên bối cảnh Việt Nam. Chỉ xuất ra nội dung của prompt cuối cùng, không thêm bất kỳ lời dẫn hay phân tích nào, dưới 130 từ.`,
        generateVr360Prompt: `Bạn là một chuyên gia tạo ảnh Panorama 360 độ (VR 360). Nhiệm vụ của bạn là tạo một prompt mô tả không gian dưới dạng 'Equirectangular projection'. 
            Hình ảnh đầu ra PHẢI là một dải toàn cảnh rộng (tỷ lệ 2:1), bao quát trọn vẹn 360 độ quanh điểm đứng của camera. 
            Mép trái và mép phải của ảnh phải khớp nhau hoàn hảo để tạo thành một không gian liên tục không tì vết khi cuộn tròn.
            Hãy sử dụng các từ khóa chuyên môn như: "equirectangular projection", "360 degree panorama", "spherical projection", "VR view", "full sphere".
            Yêu cầu của người dùng là: "{0}".`,
        generateTextureMap: `Bạn là một chuyên gia về vật liệu và texture 3D (PBR materials). Nhiệm vụ của bạn là tạo ra duy nhất một kênh map "{0}" từ ảnh chụp vật liệu này.
YÊU CẦU KỸ THUẬT BẮT BUỘC (CRITICAL):
1. SEAMLESS TILING (LẶP LẠI KHÔNG VẾT): Texture phải có khả năng lặp lại vô tận (tileable) mà KHÔNG LỘ ĐƯỜNG NỐI ở các cạnh. Họa tiết cạnh trái nối khớp cạnh phải, cạnh trên nối khớp cạnh dưới.
2. DELIGHTING (KHỬ BÓNG & SÁNG): Loại bỏ hoàn toàn bóng đổ (shadows) và ánh sáng phản xạ (highlights). Texture phải phẳng (flat), chỉ thể hiện màu sắc bản chất (Albedo) của vật liệu. Không được có hướng ánh sáng định hướng.
3. KHỬ PHỐI CẢNH: Chuyển về góc nhìn trực diện phẳng (Orthographic), không bị nghiêng hay méo.
4. GIỮ NGUYÊN CHI TIẾT: Bảo toàn vân, gai, độ nhám đặc trưng của vật liệu gốc.

Định nghĩa Map "{0}":
- Diffuse/Albedo: Map màu phẳng, không bóng, seamless.
- Normal: Map pháp tuyến (tím/xanh) thể hiện chi tiết lồi lõm.
- Displacement: Map độ cao (trắng cao, đen thấp).
- Roughness: Map độ nhám (trắng nhám, đen bóng).
- AO: Map đổ bóng khe kẽ (Ambient Occlusion).

Kết quả: 01 ảnh texture vuông chất lượng cao, seamless và delighting.`,
    },
    constants: {
        interiorLightingOptions: constants.interiorLightingOptions,
        exteriorLightingOptions: constants.exteriorLightingOptions,
        predefinedReferenceImages: constants.predefinedReferenceImages,
        predefinedMaterialImages: constants.predefinedMaterialImages,
        ASPECT_RATIO_LABELS: constants.ASPECT_RATIO_LABELS,
        stylePrompts: constants.stylePrompts,
        contextPrompts: constants.contextPrompts,
        lightingPrompts: constants.lightingPrompts,
        cameraAnglePrompts: constants.cameraAnglePrompts,
        planStylePrompts: constants.planStylePrompts,
        planRoomTypePrompts: constants.planRoomTypePrompts,
        planColorizePrompts: constants.planColorizePrompts,
        videoPrompts: constants.videoPrompts,
        materialChangeOptions: constants.materialChangeOptions,
        furnitureChangeOptions: constants.furnitureChangeOptions,
        interiorRoomTypes: constants.interiorRoomTypes,
        interiorStyles: constants.interiorStyles,
        interiorLighting: constants.interiorLighting,
        planningObjects: constants.planningObjects,
        planningStyles: constants.planningStyles,
        planningStructures: constants.planningStructures,
        planningContexts: constants.planningContexts,
        planningLightings: constants.planningLightings
    }
};
