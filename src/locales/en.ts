import * as constants from './constants';

export const en: any = {
    appTitle: "AIVAP",
    developedBy: "Developed by AIAI Studio",
    sponsoredBy: "Development sponsored by VietCG",
    apiVersionWarning: "This version requires a Google API to function. See instructions on the right.",
    changeLanguage: "Change Language",
    welcomeTitle: "AIVAP APP",
    welcomeSubtitle: "Developed by Hong Quang VAP",
    welcomeStartButton: "Get Started",
    navHome: "HOME",
    navHistory: "HISTORY",
    navSettings: "SETTINGS",
    settingsTitle: "SETTINGS",
    appearance: "Appearance",
    theme: "Theme",
    themeDark: "Dark",
    themeLight: "Light",
    themeWarm: "Warm (Default)",
    themeCold: "Cold",
    toolLabel: "AI TOOLS",
    freeMode: "Free Image Generation",
    freeModeDesc: "Generate high-quality images from text for free.",
    proMode: "Paid High-Quality Image Generation",
    proModeDesc: "Use the most powerful model (Gemini 3 Pro) for high-detail images.",
    tabCreate: "Create Image",
    tabArchitecture: "Architecture",
    tabInterior: "Interior",
    tabPlanning: "Planning",
    tabCameraAngle: "Camera Angle",
    tabEdit: "Edit Image",
    tabPlanTo3D: "Plan to 3D",
    tabCanvaMix: "Canva Mix",
    tabCreatePrompt: "Magic Prompt",
    tabTrend: "Trend",
    tabCreateVideo: "Create Video",
    library: "Library",
    tabUtilities: "Utilities",
    tabLibrary: "Library",
    tabEditorBeta: "Editor Beta",
    uploadImage: "Upload Image",
    uploadImageOptional: "Upload Image (Optional)",
    handDrawnHint: "Hand-drawn sketches or simple models without shadows are preferred.",
    referenceImage: "Reference Image (Style)",
    prompt: "Prompt",
    negativePrompt: "Negative Prompt",
    applyDefault: "Apply Default",
    negativePromptHelp: "List things you don't want in the image. E.g., ugly, deformed, low quality, blurry, signature...",
    aspectRatio: "Aspect Ratio",
    imageCount: "Image Count",
    imageSize: "Image Size (API Only)",
    dropzoneHint: "Drag & drop, paste, or click",
    dropzoneFormats: "PNG, JPG, WEBP",
    download: "Download",
    original: "Original",
    result: "Result",
    delete: "Delete",
    choosePresetImage: "Choose Preset",
    close: "Close",
    referenceImageHelp: "AI will take inspiration for style, lighting, context, and materials.",
    processingImage: "Processing image...",
    addFromPresets: "Or choose a preset prompt to add:",
    style: "Style",
    context: "Context",
    lighting: "Lighting",
    roomType: "Room Type",
    planningObject: "Object",
    planningStyle: "Style",
    planningStructure: "Structure",
    aspectRatioHelp: "Only effective when 'Source Image' is not uploaded.",
    generateFromImage: "Prompt from Image",
    generateFromPromptText: "Prompt from Prompt",
    generating: "Generating...",
    specifyCloseUpAngle: "Specify Close-up Angle (Optional)",
    specifyCloseUpHelp: "Draw a rectangle on the image for AI to automatically render a close-up of that area.",
    selectArea: "Select Area",
    cancel: "Cancel",
    clearSelection: "Clear Selection",
    chooseCameraAngle: "Choose Camera Angle",
    selectCameraAnglePlaceholder: "-- Select Camera Angle --",
    customDescription: "Custom Description",
    customDescriptionPlaceholder: "E.g., 3/4 view from below...",
    chooseFunction: "Choose Function",
    editSelectedArea: "Edit Selected Area",
    smartEdit: "Smart Edit",
    mergeHouse: "Merge House",
    mergeMaterial: "Change Material",
    mergeFurniture: "Change Furniture",
    editFunctionHelp: {
        inpaint: "Remove or replace objects by drawing a selection and entering a description.",
        smartEdit: "High-definition editing by selecting a work area (box) and painting the change area (mask).",
        mergeHouse: "Integrate a new structure into an existing context.",
        mergeMaterial: "Apply material from a second image to an object in the source image.",
        mergeFurniture: "Replace furniture in the source image with items from a second image.",
        canva: "Combine multiple isolated items (PNG) into a space with realistic scale and lighting."
    },
    uploadSourceImage: "Upload Source Image",
    sourceImage: "Source Image",
    secondImage: "Second Image",
    addObjects: "Add Objects",
    addObject: "Add Object",
    planImage: "Plan Image",
    styleReference: "Style Reference",
    architecturalImage: "Architectural Image",
    characterOptional: "Character (Optional)",
    toIncludeInPrompts: "To include in prompts",
    uploadContextImage: "Upload Context Image (Image 1)",
    contextImageHelp: "Context image with the building site marked in red.",
    resetImage: "Reset & Start Over",
    chooseToolAndDraw: "Choose Tool & Draw Selection",
    lassoTool: "Lasso",
    brushTool: "Brush",
    lineThickness: "Line Thickness",
    brushSize: "Brush Size",
    uploadReferenceOptional: "Upload Reference Image (Optional)",
    referenceImageHelpEdit: "AI will take inspiration from this image to change the selected area.",
    uploadBuildingImage: "Upload Building Image (Image 2)",
    uploadMaterialFurnitureImage: "Upload Material/Furniture Image (Image 2)",
    image2Help: "Note: Background should be removed and Image 2 scale should be similar to Image 1. E.g., both 3:4.",
    promptPlaceholder: {
        create: "E.g., a modern house, daylight, realistic photo...",
        negative: "E.g., text, signature, low quality, noise",
        inpaint: "E.g., add an arched window...",
        smartEdit: "Describe the change for the masked area inside the box...",
        mergeHouse: "Describe how to merge the two images...",
        mergeMaterial: "E.g., Replace the rug in Image 1 with the patterned rug in Image 2",
        mergeFurniture: "Describe how to merge the two images...",
        planTo3dRender: "Modern living room...",
        planTo3dColorize: "Pastel color palette...",
        video: "Describe the motion...",
        videoPrompt: "E.g., a slow drone shot flying from a distance towards the building...",
        vr360: "E.g., luxury hotel lobby, 360-degree panorama, modern architecture...",
        editorBeta: "Describe the change for the selected area...",
        cameraAngle: "Describe the new camera angle (e.g., Bird's eye view, Low angle, Interior from window...)"
    },
    promptExamples: "Or choose example prompts:",
    selectOption: "-- Select an option --",
    upload2dPlan: "Upload 2D Plan",
    chooseGoal: "Choose Goal",
    create3DImage: "Create 3D Image",
    colorizePlan: "Colorize Plan",
    analyzePlanPrompt: "Analyze Style",
    suggestions: "Suggestions",
    motionDescription: "Motion Description",
    selectSuggestion: "-- Select a suggestion --",
    uploadSpaceImage: "Upload Space Image (Background)",
    changeBgImage: "Change Background Image",
    clickOrDropNew: "Click or drag & drop new image",
    deleteAll: "Delete All",
    uploadDecorImage: "Upload Decor Image (Isolated)",
    decorHelp: "Use background-removed images (PNG).",
    clickToAdd: "Click to add to canvas",
    adjustments: "Adjustments",
    lockLayout: "Lock Layout",
    deleteObject: "Delete Object (or press Backspace)",
    rotate: "Rotate",
    flipHorizontal: "Flip Horizontal",
    flipVertical: "Flip Vertical",
    uploadToAnalyze: "Upload to Analyze",
    editorBetaStep1: "STEP 1: Upload Source Image",
    editorBetaSelectTool: "Select Selection Tool",
    editorBetaBoundingBox: "Bounding Box",
    editorBetaMask: "Mask (Brush)",
    editorBetaStep2: "STEP 2: Prompt & Reference",
    editorBetaGenerateContent: "Generate Content",
    editorBetaStep3: "STEP 3: Refine & Merge",
    editorBetaExpansion: "Expansion (px)",
    editorBetaEdgeBlend: "Edge Blend (px)",
    editorBetaIntermediateResult: "Intermediate Result",
    editorBetaFinalResult: "Final Result",
    mergeToOriginal: "Merge to Original",
    analyzeHelp: "AI will analyze the image and generate 20 professional photography prompts.",
    uploadCharacterImage: "Upload Character Image (Optional)",
    characterHelp: "AI will analyze and place this character in shots with people.",
    characterDescriptionLabel: "Character in image",
    analyzingCharacter: "Analyzing character...",
    uploadStartImage: "Upload Start Image",
    virtualTourHelp: "Upload a 3D render to start a virtual tour.",
    createImage: "Create Image",
    createVideo: "Create Video",
    createPrompt: "Create Prompt",
    choosePresetMaterial: "Choose Preset Material",
    loadingReference: "Loading image...",
    loadingStart: "Starting generation process...",
    loadingAnalyzePrompts: "Analyzing image and generating prompts...",
    loadingAnalyzingArea: "Analyzing and regenerating area details...",
    loadingMessageDefault: "Generating image, please wait...",
    loadingUsageLimit: "AIcomplex Usage Limit:",
    loadingUsageText: "Each user can generate 40-45 images per day. To increase this, you can use 2-3 different Gmail addresses.",
    loadingUsageNote: "👉 Note: Each email should be logged in a separate browser or Chrome tab to avoid account conflicts.",
    loadingAdText: "For better images, check out AIAI's AI in Architecture & Interior courses - Contact 0387414593",
    loadingVideoHeader: "AI is creating your video...",
    loadingVideoHelp: "Video generation can take several minutes. Please do not close or reload the page.",
    loadingPromptHeader: "Generating prompts...",
    loadingPromptHelp: "AI is analyzing your image to create unique photography descriptions.",
    emptyStateHeader: "Render Result",
    emptyStateText: "Results will appear here.",
    emptyCanvaHeader: "Your Creative Space",
    emptyCanvaText: "Upload a 'space image' in the control panel to start.",
    emptyPromptHeader: "Professional Prompt Suggestions",
    emptyPromptText: "Upload an image and AI will generate 20 photographer-style prompts.",
    emptyTourHeader: "Virtual Tour",
    emptyTourText: "Upload a render in the control panel to start your tour.",
    tourHistory: "Tour History",
    fullscreen: "Fullscreen",
    editThisImage: "Edit this image",
    useAsSource: "Use as source",
    downloadImage: "Download Image",
    downloadVideo: "Download Video",
    copyPrompt: "Copy prompt",
    noPrompt: "No prompt available",
    createFromThisPrompt: "Create from this prompt",
    tourUndo: "Undo",
    tourRedo: "Redo",
    saveToLibrary: "Save to Library",
    saved: "Saved!",
    history: "History",
    clearAll: "Clear All",
    clearHistoryConfirm: "Are you sure you want to clear all history?",
    review: "Review",
    images: "images",
    prompts: "Prompts",
    historyEmpty: "Results from previous generations will be saved here.",
    libraryEmptyHeader: "Your Library is Empty",
    libraryEmptyText: "Save images you like from the results to view them later.",
    deleteFromLibrary: "Delete from Library",
    closeFullscreen: "Close",
    editImage: "Edit Image",
    reset: "Reset",
    saveImage: "Save Image",
    apiKeyRequired: "API Key Required",
    apiKeyDescription: "To use video generation, you need to select an API Key from your Google Cloud project. This feature uses the Veo model and may incur costs.",
    apiKeyBillingInfo: "For more information on pricing, please refer to the",
    billingDocs: "billing documentation",
    selectApiKey: "Select API Key",
    alertUploadSource: "Please upload a source image.",
    alertDrawMask: "Please draw a selection on the image to edit.",
    alertSelectSmartBox: "Please select a work area (Step 1) on the image.",
    alertSelectSmartMask: "Please paint the area to edit (Step 2) inside the box.",
    alertUploadBothImages: "Please upload both images to proceed.",
    alertUploadBg: "Please upload a space image (background).",
    alertUploadDecor: "Please upload at least one decor image.",
    alertEnterPrompt: "Please enter a description (prompt).",
    alertGenerationFailed: "Generation failed. Please check your API key and try again.",
    alertInvalidApiKey: "Invalid or deleted API Key. Please select another API Key.",
    alertNoSourceForPrompt: "No source image found from the Create Prompt tab. Please try again.",
    alertImageGenFailedRetry: "Image generation failed. Please try again.",
    alertTourFailed: "Failed to generate the next frame.",
    alertApiKeyUtilUnavailable: "API Key selection utility is not available.",
    alertImageGenFailed: "AI did not return any images.",
    alertMoodboard: "Please upload an inspiration image and enter a theme description.",
    alertLighting: "Please upload an image and select at least one lighting type.",
    alertVideoPrompt: "Please upload a source image and enter a motion request.",
    alertStyleChange: "Please upload an image, enter a style request, and generate a prompt before creating the image.",
    alertStylePromptGen: "Please upload an image and enter a style request to generate a prompt.",
    alertSelectArea: "Please select an area on the image first.",
    donate: "Donate",
    promptInitial: "Realistic photo of a house",
    promptInterior: "Realistic photo of an interior",
    promptInitialPlanning: "Realistic photo of a Master Plan bird's-eye view from above of",
    promptCloseUp: "Close-up shot focusing on the details of",
    promptCanvaMix: "Canva Mix generation",
    promptArchitecturalGenerated: "Architectural Prompts Generated",
    negativePromptDefault: "cartoon, 2d illustration, sketch, cgi, render artifact, fake render, unreal engine style, game asset, lowpoly, plastic surface, wax texture, flat lighting, incorrect reflections, overexposed, underexposed, low contrast, washed out, noisy, blurry, depth map error, distorted perspective, unrealistic scale, fake shadows, wrong proportion, low resolution, low detail, low quality, over-saturated, oversharpened edges, halo, outline, glowing edges, bad composition, incorrect DOF, cutout, text, watermark, logo, posterized, painting, drawing, toy-like, artificial lighting, non-realistic material, duplicated objects, blurry wall texture, flat materials, poor texture mapping, distorted lines, model border",
    utilitiesTitle: "Extended Utilities",
    moodboardTitle: "Create Moodboard",
    moodboardDesc: "Upload an image and enter a description for AI to create a complete inspiration board with color palette, materials, and related imagery.",
    videoPromptTitle: "Video Script",
    videoPromptDesc: "Generate detailed motion scripts for architectural videos.",
    lightingTitle: "Lighting Setup",
    lightingDesc: "Experiment with different lighting scenarios for your model.",
    virtualTourTitle: "Virtual Tour",
    virtualTourDesc: "Upload a 3D render and move through the space using AI.",
    extendViewTitle: "Extend View",
    extendViewDesc: "Expand the image frame to a desired ratio with AI automatically drawing the missing parts.",
    changeStyleTitle: "Change Style",
    changeStyleDesc: "Upload an image, describe a new style, and AI will generate a professional prompt to transform your image.",
    interiorViewTitle: "Creative Interior View",
    interiorViewDesc: "Upload an interior space image and AI will create 9 different spaces in the same style.",
    architectureViewTitle: "Creative Architecture",
    architectureViewDesc: "Upload an architectural image and AI will generate 9 different camera angles.",
    archToInteriorTitle: "Interior from Architecture",
    archToInteriorDesc: "Upload an architectural image and AI will design 9 corresponding interior views.",
    syncViewTitle: "Sync View",
    syncViewDesc: "Synchronize style, materials, and lighting from a sample image to other views.",
    lightingSimulationTitle: "Lighting & Style Simulation",
    lightingSimulationDesc: "Redraw a render according to the lighting mood and style of a reference image.",
    constructionProcessTitle: "Construction Process",
    constructionProcessDesc: "Recreate construction stages from raw state to finished landscape from a real photo.",
    canvaMixTitle: "Canva Mix",
    canvaMixDesc: "Integrate furniture and decor into a space with realistic scale and lighting.",
    vr360Title: "VR 360",
    vr360Desc: "Create a 360-degree space from a description or upload a Panorama for a virtual reality tour.",
    vr360ViewTitle: "Your 360 Space",
    vr360ViewDesc: "Drag to explore the surroundings.",
    uploadVrImage: "Upload 360 Panorama",
    vr360PromptLabel: "360 Space Description",
    generateVrButton: "Create VR 360",
    comingSoon: "Coming Soon",
    backToUtilities: "Back to Utilities",
    uploadInspirationImage: "1. Upload Inspiration Image",
    uploadReferenceImage: "2. Upload Reference Image (Style)",
    moodboardPromptHelp: "3. Describe Theme or Style",
    moodboardReferenceHelp: "AI will take inspiration for color and style from this image.",
    moodboardImageCount: "4. Number of Results",
    generateMoodboardButton: "Create Moodboard",
    moodboardEmptyHeader: "Your Inspiration Board",
    moodboardEmptyText: "Upload images and enter a description to start.",
    generatingMoodboard: "Generating moodboard...",
    moodboardSamplePrompt: "Use sample prompt",
    moodboardSamplePromptText: "create a moodboard of interior furniture items, each item isolated on a white background, with a main overview image in the center, individual items below (bed, nightstand, wardrobe, lamp, rug, curtains), and a color and material palette on the right, all within a vertical frame on a white background",
    uploadModelImage: "1. Upload Model Image",
    chooseLighting: "2. Choose Lighting Type",
    interiorLighting: "Interior Lighting",
    exteriorLighting: "Exterior Lighting",
    generateLightingButton: "Generate with New Lighting",
    lightingEmptyHeader: "Your Lighting Space",
    lightingEmptyText: "Upload an image to start experimenting with lighting scenarios.",
    generatingLighting: "Generating new image...",
    motionRequest: "2. Motion Request",
    generatingVideoPrompt: "Generating video prompt...",
    generatedVideoPromptTitle: "Generated Prompt (English)",
    videoPromptEmptyHeader: "Your Video Script",
    videoPromptEmptyText: "Upload an image and enter a request for AI to create a professional video prompt.",
    uploadImageToExtend: "1. Upload Image to Extend",
    chooseAspectRatio: "2. Choose New Aspect Ratio",
    generateExtendedView: "Extend View",
    generatingExtendedView: "Extending view...",
    extendViewEmptyHeader: "Your Extended Space",
    extendViewEmptyText: "Upload an image and choose a ratio to start.",
    uploadImageForStyleChange: "1. Upload Image for Style Change",
    enterStyleRequest: "2. Enter Style Request",
    styleRequestPlaceholder: "E.g., Indochine style, cyberpunk style, warm tones...",
    generateNewPromptButton: "Generate New Prompt",
    generatedPromptReady: "3. Prompt Ready! (Editable)",
    generateStyledImageButton: "Generate Styled Image",
    generatingStylePrompt: "Generating new prompt...",
    generatingStyledImages: "Generating styled images...",
    interiorViewStep1: "1. Upload Sample Interior",
    interiorViewStep1Desc: "Upload an image with the style, materials, and colors you want to replicate.",
    interiorViewStep2: "2. Upload Character (Optional)",
    interiorViewStep2Desc: "If uploaded, this character will appear in the spaces.",
    interiorViewStep3: "3. Start Creating",
    interiorViewStep3Desc: "AI will generate 9 consistent spaces.",
    architectureViewStep1: "1. Upload Sample Architecture",
    architectureViewStep1Desc: "Upload an image with the basic form or style you want to develop.",
    architectureViewStep2: "2. Upload Character (Optional)",
    architectureViewStep2Desc: "If uploaded, this character will appear in the options.",
    architectureViewStep3: "3. Start Creating",
    architectureViewStep3Desc: "AI will generate 9 different architectural options.",
    archToInteriorStep1: "1. Upload Architecture (Exterior)",
    archToInteriorStep1Desc: "Upload a facade or perspective. AI will design the corresponding interior.",
    archToInteriorStep2: "2. Upload Character (Optional)",
    archToInteriorStep2Desc: "The character will be placed in the interior spaces.",
    archToInteriorStep3: "3. Create Interior",
    archToInteriorStep3Desc: "AI generates 9 spaces: living, kitchen, bedroom... consistent with the architecture.",
    syncViewStep1: "1. Upload Sample View",
    syncViewStep1Desc: "Upload a beautiful render for AI to learn the style, materials, and lighting.",
    syncViewStep2: "2. Upload View to Sync",
    syncViewStep2Desc: "Upload a sketch or raw render from a different angle.",
    syncViewStep3: "3. Start Syncing",
    syncViewStep3Desc: "AI will redraw the second view in the style of the first.",
    lightingSimulationStep1: "1. Upload Rendered Image",
    lightingSimulationStep1Desc: "Upload your current render you want to change the mood and style of.",
    lightingSimulationStep2: "2. Upload Reference Lighting",
    lightingSimulationStep2Desc: "Upload an image with the desired lighting mood and render style.",
    lightingSimulationStep3: "3. Simulate Lighting",
    lightingSimulationStep3Desc: "AI will re-render Image 1 according to Image 2's scenario.",
    constructionStep1: "1. Upload Finished Project",
    constructionStep1Desc: "Upload a perspective or photo of the finished building for AI to calculate previous stages.",
    constructionStep2: "2. Start Simulation",
    constructionStep2Desc: "AI will generate 5 images corresponding to the 5 main construction stages.",
    stageMessy: "Messy Site",
    stageCleaned: "Cleaned Site",
    stageRough: "Rough Construction (Unpainted)",
    stageFinishing: "Finishing (Paint & Doors)",
    stageLandscape: "Landscape Completion",
    stageFinal: "Final Completion",
    convertToWatercolor: "Watercolor Sketch",
    convertingToWatercolor: "Converting to Watercolor Sketch...",
    generatingConstructionViews: "Calculating construction stages...",
    generatingArchitectureViews: "Analyzing and generating architectural options...",
    generatingArchitectureOption: "Generating {0}...",
    downloadAll: "Download All",
    roomLiving: "Living Room",
    roomBedroom: "Bedroom",
    roomKitchen: "Kitchen",
    roomDining: "Dining Room",
    roomStudy: "Study Room",
    roomBath: "Bathroom",
    roomHall: "Hallway",
    roomDetail: "Close-up",
    roomOutdoor: "Balcony / Garden",
    archOption: "Option",
    archViewTypes: {
        wide1: "Wide View 1 (Sunrise)",
        wide2: "Wide View 2 (Sunset)",
        wide3: "Wide View 3 (Bird's Eye)",
        close1: "Close-up 1 (Surface Material)",
        close2: "Close-up 2 (Structural Detail)",
        close3: "Close-up 3 (Entrance & Lobby)",
        close4: "Close-up 4 (Architectural Angle)",
        artistic1: "Artistic 1 (Foreground Blur)",
        artistic2: "Artistic 2 (Night Perspective)"
    },
    smartEditStep1: "1. Select Work Area (Box)",
    smartEditStep1Desc: "Select a small area around the object for AI to focus on.",
    smartEditStep2: "2. Paint Area to Edit (Mask)",
    smartEditStep2Desc: "Only the red-painted parts will be changed.",
    smartEditStep3: "3. Enter Description",
    smartEditStep4: "4. Render & Merge",
    confirmAreaPrompt: "Confirm Close-up Prompt",
    editAreaPromptDesc: "AI has analyzed the selection. You can edit the description below before generating.",
    confirmAndGenerate: "Confirm & Generate",
    trendLayoutTitle: "Drawing Layout",
    trendLayoutDesc: "Create architectural layouts from ideas.",
    trendModelTitle: "Create Drawings",
    trendModelDesc: "Generate technical orthographic drawings.",
    trendDiagramTitle: "Create Diagram",
    trendDiagramDesc: "Create architectural analysis diagrams.",
    trendAnalyzeTitle: "Form Analysis",
    trendAnalyzeDesc: "Analyze forms and architecture from images.",
    trendMoodboardTitle: "Moodboard",
    trendMoodboardDesc: "Create idea and material boards.",
    textureMapTitle: "Create Texture Maps",
    textureMapDesc: "Generate map channels (Diffuse, Normal, Displacement...) from material photos for rendering.",
    textureMapStep1: "1. Upload Material Image",
    textureMapStep2: "2. Crop Texture Area (Optional)",
    textureMapStep3: "3. Select Map Channels",
    textureMapEmptyHeader: "Your Textures",
    textureMapEmptyText: "Upload an image and select a material area to start generating maps.",
    generateMaps: "Generate Texture Maps",
    generatingMaps: "Calculating map channels...",
    engineeredPrompts: {
        zoomMagnifyPrompt: `You are an expert in super-resolution and architectural photography. Task: "Close-up render" of the provided image area.
**MANDATORY REQUIREMENTS**:
1. PRESERVE 100% of the architectural forms, geometric lines, and detail positions from the original image. Do not add, remove, or distort the physical structure.
2. Reproduce material textures with extreme sharpness: wood grain, stone veins, fabric weave, specular gloss, and surface roughness must be more realistic and detailed than the original.
3. You may subtly adjust the camera angle (e.g., artistic tilt, low-angle shot) to create a more professional architectural detail photo, but ensure the subject is immediately recognizable as the same one from the original image.
4. Lighting and color must be completely consistent with the overall space.
Result: A hyper-realistic architectural macro photo, high resolution, absolute detail.`,
        analyzeCharacterPrompt: "Analyze the person in the image. Describe appearance focusing on: hair, skin, clothing in under 20 words. Output raw text only, no introduction.",
        analyzeAreaPrompt: `Act as an architectural photography expert and AI Prompt Engineer. Your task is to analyze an image (cropped from a larger one) to write an extremely detailed prompt for an image-generation AI.
STRUCTURE REQUIREMENT: "close-up shot focusing on the details of [subject], [subject characteristics (specifics, material, sharp material texture, roughness, reflectivity)], [lighting conditions and shadows]".
LENGTH REQUIREMENT: The answer must be 30 to 50 words long in English.
BEHAVIOR: Focus on describing small details that are blurry in the original image. Describe material lines as if you were seeing them in 8k resolution. Do not add any introduction (like "Here is the prompt:"), only output the description content following the above structure.`,
        applyLighting: `You are an expert in architectural lighting and rendering. The user has provided an image and wants to completely change its lighting scenario. Your task is to re-render this image with the new lighting conditions described below. **IMPORTANT**: You must preserve 100% of the architectural forms, materials, and composition of the original image. Only change the lighting, shadows, and overall atmosphere of the scene. The desired lighting scenario is: "{0}".`,
        classifyImageTypePrompt: `Is this an interior or exterior image? Answer with only one word: 'interior' or 'exterior'.`,
        generateInteriorVariation: `You are a professional Interior Architect. You are provided with a sample image representing style, color, and materials. Your task is to imagine and draw another space within the same house.
REQUIREMENTS:
- PRESERVE the design style (e.g., Japandi, Industrial, Neoclassical...).
- PRESERVE the dominant color palette (e.g., Walnut wood + Cognac leather + Concrete gray).
- PRESERVE material properties (gloss, roughness, wood grain).
- SPACE TO CREATE: "{0}".
{1}
Draw a professional architectural photography shot, realistic, 8k, soft natural daylight.`,
        generateArchitectureVariation: `You are a professional Architect. You are provided with a sample architectural image representing 100% real forms and details. Your task is to redraw a specific architectural view (close-up or artistic) from this building.
REQUIREMENTS:
- PRESERVE 100% of all architectural details, forms, materials, and structures from the sample image.
- ABSOLUTELY DO NOT add or create new details, or change components not present in the original image. Only use what is already on the original building.
- For CLOSE-UP and ARTISTIC views: You must only focus on existing components of the building, no interpolation or strange details allowed.
- You are only allowed to change the camera angle, lens focal length, and lighting conditions to create a professional architectural photo.
- VIEW TO CREATE: "{0}".
{1}
The result must be a realistic photo, 8k, absolute sharpness.`,
        generateArchToInterior: `You are a talented Architect and Interior Designer. You are provided with an EXTERIOR image of an architectural project. Your task is to design and draw the INTERIOR space inside that project.
REQUIREMENTS:
- STYLE: The interior must be completely consistent with the exterior architectural style (e.g., if the architecture is modern minimalist, the interior must also be modern minimalist).
- WINDOW SYSTEMS: If the space has windows, the frame style, material, and proportions MUST be identical to the window systems seen on the architectural facade in the original image.
- MATERIALS: Use a material and color palette similar to the exterior to create continuity.
- SPACE TO CREATE: "{0}".
{1}
The result is a professional interior photography shot, 8k, extremely realistic natural daylight.`,
        syncViewPrompt: `You are a professional AI Rendering expert. You are provided with 2 images.
IMAGE 1: Sample View (Style Reference). Analyze and remember carefully: dominant colors, materials (wood, stone, fabric...), lighting (direction, color temperature, contrast), context (environment, landscape), and overall design style.
IMAGE 2: View to Sync (Source Geometry).
TASK: Re-render IMAGE 2 such that:
1. PRESERVE 100% of the camera angle, architectural forms, and existing details in IMAGE 2.
2. APPLY ALL colors, materials, lighting scenarios, and environmental atmosphere from IMAGE 1 into the space of IMAGE 2.
The result must be a realistic photo, 8k, extremely realistic, showing perfect visual consistency with the Sample View.`,
        lightingSimulationPrompt: `You are an expert in architectural visualization and lighting. You are provided with 2 images.
IMAGE 1: Lighting and Style Sample (Mood Reference). Carefully analyze the lighting setup, color grading, contrast, and render style (e.g., photorealistic, sketchy, watercolor, cinematic).
IMAGE 2: Existing Perspective (Base Image).
TASK: Redraw IMAGE 2 such that:
1. PRESERVE 100% of the architectural forms, interior/architectural details, materials (textures), and camera angle from IMAGE 2. Absolutely do not add or remove objects or change materials.
2. ONLY CHANGE the lighting mood, color tones, and render style to match IMAGE 1 exactly.
The result must be a visualization piece with absolute emotional and stylistic similarity to the Reference Image.`,
        constructionMessy: `You are an architectural image editing AI. Redraw this building at the pre-construction site stage.
REQUIREMENTS:
- PRESERVE 100% of the surrounding context, sky, and camera angle.
- REPLACE the main building's position with a messy, vacant lot filled with dirt, rocks, debris, rubble, and weeds. There may be a few temporary shacks for workers.
- Create the feeling of an uncleared, raw construction site before groundbreaking.`,
        constructionCleaned: `You are an architectural image editing AI. Redraw this building at the cleared site stage.
REQUIREMENTS:
- PRESERVE 100% of the surrounding context and camera angle.
- REPLACE the main building with a flat, leveled ground, cleared of debris.
- Include construction fencing around the site. The site should look organized and ready for piling and foundation work.`,
        constructionRough: `You are an architectural image editing AI. Redraw this building at the ROUGH CONSTRUCTION stage.
REQUIREMENTS:
- PRESERVE 100% of the architectural forms, window positions, and camera angle.
- REPLACE all finished surfaces with RAW materials: unplastered red brick walls, exposed gray concrete beams/columns.
- No paint, no window glass, no railings. There may be wooden or iron scaffolding around it.
- The result should look like a building in the structural frame phase.`,
        constructionFinishing: `You are an architectural image editing AI. Redraw this building at the BASIC FINISHING stage.
REQUIREMENTS:
- PRESERVE 100% of the architectural forms and camera angle.
- BUILDING: Walls are plastered and painted according to the sample. Aluminum-glass window systems are fully installed.
- EXTERIOR: The yard and garden are not yet landscaped, still concrete or bare ground. No gates or exterior decor.
- It should look like the house has just finished its shell and windows but hasn't been landscaped yet.`,
        constructionLandscape: `You are an architectural image editing AI. Redraw this building at the FULL LANDSCAPE COMPLETION stage.
REQUIREMENTS:
- PRESERVE the architectural building as in the original image.
- ADD ALL landscape elements: stone-paved yard, lush green lawn, flower beds, large shade trees, garden lighting system, and aesthetic perimeter walls/gates.
- The result is a realistic architectural photo, showing the building in its best state after being put into use.`,
        watercolorSketchPrompt: `You are a master architectural visualization artist. Convert this image into a professional hand-drawn watercolor sketch.
MANDATORY REQUIREMENTS:
1. PRESERVE 100% of the architectural forms, proportions, and details from the original image. No distortion or changes to the physical structure.
2. PRESERVE the original building and context color palette.
3. EXPRESS with sharp pencil/ink lines combined with artistic watercolor bleeding effects on textured paper.
The result is a hyper-realistic architectural sketch, emotional and elegant.`,
        trendLayoutPrompt: "Professional architectural layout, portfolio layout, presentation board with notes, plans, perspectives, and diagrams combined harmoniously on a clean white background.",
        trendModelPrompt: "Technical orthographic drawings, elevations, detailed architectural sections, sharp technical lines on a white background, professional CAD drawing style.",
        trendDiagramPrompt: "Architectural analysis diagram, massing diagram, arrows indicating traffic flow, sun and wind analysis, minimalist style, graphic colors.",
        trendAnalyzePrompt: "Architectural form analysis, exploded axonometric, showing material layers and internal structure of the building.",
        trendMoodboardPrompt: "Architectural material moodboard, fabric samples, wood, stone, color palette, and inspiration images arranged elegantly in a single frame.",
        planTo3dRenderPrompt: 'You are a professional AI architect, specializing in converting 2D floor plans into hyper-realistic 3D interior renders. You have the ability to identify spaces, furniture, and materials from technical drawings to create a vivid, realistic space. User request: "{0}".',
        planTo3dColorizePrompt: 'You are an AI assistant for architects. Your task is to colorize a black and white 2D floor plan to turn it into a vivid, easy-to-understand floor plan, clearly showing functional areas, floor materials, and furniture. User request: "{0}".',
        interiorViewWithCharacter: "ADD CHARACTER: Place the character from the second image naturally into the space. The character should be {action}. Ensure the character's clothing and appearance are consistent with the provided character image.",
        architectureViewWithCharacter: "ADD CHARACTER: Place the character from the second image naturally into the architectural context (e.g., walking in front of the lobby, standing on a balcony, or strolling in the yard). Ensure clothing and appearance are consistent with the character image.",
        generateFromImageInterior: `You are a world-class interior designer and 3D visualization expert with 20 years of experience. Your task is to analyze the provided image (3D render, sketch, or photo) and write a highly detailed, "magical" prompt for an AI image generator.
The prompt should be under 150 words and follow this structure:
1. **Core Subject**: A professional architectural photograph of [room type], [design style].
2. **Materiality**: Describe the textures and materials in extreme detail (e.g., "raw woven linen sofa with visible fiber texture", "honed white Calacatta marble with soft grey veining", "warm herringbone walnut flooring").
3. **Lighting**: Describe cinematic lighting (e.g., "Volumetric God Rays", "Golden Hour glow", "Soft diffused daylight through sheer curtains").
4. **Atmosphere**: Add atmospheric details like "floating dust particles", "soft lens flare", or "crisp morning air".
5. **Camera**: Specify a professional camera setup (e.g., "Wide Shot 24mm", "Eye-Level perspective", "8k resolution", "architectural photography style").

**MANDATORY**:
- Keep the geometry, materials, and layout 100% consistent with the uploaded image.
- Choose lighting that makes the result look like a real, high-end photograph.
- DO NOT add any introductory text. Return ONLY the prompt.`,
        generateFromKeywordsInterior: `You are a master interior designer and AI prompt engineer. Based on the user's keywords, create a detailed, immersive prompt for a high-end interior space.
Focus on:
- **Style**: Translate keywords into a cohesive design language (e.g., Japandi, Industrial, Luxury).
- **Materials**: Emphasize tactile realism (e.g., "natural oak grain", "matte marble surfaces", "soft velvet textures").
- **Lighting**: Always use soft, natural daylight for a clean, high-end look.
- **Camera**: Describe a professional architectural composition.

**Keywords**: "{0}"

**MANDATORY**:
- DO NOT describe the exterior view (e.g., city views, gardens). Focus entirely on the interior.
- Return ONLY the prompt.`,
        generateWithReference: `User prompt: "{0}". As an architectural rendering AI, your task is to combine a structural sketch with a style reference image. The first image is the structural sketch. The second image is the reference for style, lighting, context, and materials. You must apply the atmosphere, lighting, color palette, materials, and surrounding landscape from the second image to the building from the first sketch. Strictly forbidden to copy the main architectural shape from the second style reference, but you should apply its overall environment and textures. The final render must be an exterior photo based on the user prompt.`,
        generateWithReferenceNegative: `User prompt: "{0}". As an architectural rendering AI, your task is to combine a structural sketch with a style reference image. The first image is the structural sketch. The second image is the reference for style, lighting, context, and materials. You must apply the atmosphere, lighting, color palette, materials, and surrounding landscape from the second image to the building from the first sketch. Strictly forbidden to copy the main architectural shape from the second style reference, but you should apply its overall environment and textures. The final render must be an exterior photo based on the user prompt. IMPORTANT: The user has specified things to AVOID. You absolutely MUST NOT include any of the following elements in the image: "{1}".`,
        generateWithoutReference: `User prompt: "{0}". You are creating a realistic architectural render. The provided image is the absolute reference for form and detail (not to be considered a sketch). Create a realistic image based on this original and the user prompt.`,
        generateWithoutReferenceNegative: `User prompt: "{0}". You are creating a realistic architectural render. The provided image is the absolute reference for form and detail (not to be considered a sketch). Create a realistic image based on this original and the user prompt. IMPORTANT: The user has specified things to AVOID. You absolutely MUST NOT include any of the following elements in the image: "{1}".`,
        generateFromImage: `You are a world-class architectural photographer and AI prompt engineer with 20 years of experience. Your task is to analyze the provided image (3D render, sketch, or photo) and write a highly detailed, "magical" prompt for an AI image generator.
The prompt should be under 150 words and follow this structure:
1. **Core Subject**: A professional architectural photograph of [building type], [design style].
2. **Materiality**: Describe the textures and materials in extreme detail (e.g., "weathered cedar cladding", "exposed board-form concrete", "reflective floor-to-ceiling glass").
3. **Lighting**: Describe cinematic lighting (e.g., "Golden Hour glow", "Dramatic sunset with long shadows", "Soft overcast light for even tones").
4. **Context**: Create a lush, realistic environment (e.g., "lush tropical garden", "quiet Vietnamese street with stone paving", "misty mountain backdrop").
5. **Camera**: Specify a professional camera setup (e.g., "Wide Shot", "Low Angle perspective", "Tilt-shift lens for straight verticals", "8k resolution").

**MANDATORY**:
- Keep the geometry and materials 100% consistent with the uploaded image.
- Create a context that feels real and high-end, preferably inspired by modern Vietnamese architecture.
- ABSOLUTELY NO power lines, messy signs, or distracting urban clutter.
- Return ONLY the prompt and append the phrase: "preserve original details of the uploaded image".`,
        generateFromKeywords: `You are a master architect and AI visualization expert. Based on the user's keywords, create a detailed, immersive prompt for a high-end architectural project.
Focus on:
- **Style**: Translate keywords into a cohesive architectural language.
- **Context**: Create a beautiful, realistic environment, preferably inspired by high-end Vietnamese locations.
- **Lighting**: Use cinematic lighting (e.g., Golden Hour, Volumetric light) to highlight the building's form.
- **Camera**: Describe a professional architectural composition.

**Keywords**: "{0}"

**MANDATORY**:
- Return ONLY the prompt.`,
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
You are working on a high-resolution cropped image area. Your task is to redraw the MASKED part (white) in an extremely detailed and realistic way according to the description: "{0}".
REQUIREMENTS:
- Only change what is inside the MASK area.
- Preserve the composition and perspective of the surrounding image within the crop frame.
- The result must blend perfectly with existing lighting and materials.
- Extremely high detail, pixel-sharp.`,
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
        generateArchitecturalPrompts: `Act as a professional photographer with over 20 years of experience in architectural, interior, landscape, planning, and resort photography, having won multiple international awards.

You are also a Prompt Engineer & AI Visual Prompt Designer, with deep knowledge of descriptive language, visual composition, lighting, space, proportions, and visual emotion in world-leading architectural magazines like ArchDaily, Dezeen, Architectural Digest, Wallpaper, Dwell…

I will upload an image of a project (architecture or interior). Imagine you are actually standing in that space with a professional camera (Canon R5 or Nikon Z9, tilt-shift and wide-angle – tele lenses depending on the scene).

OPTIONAL INPUT: Character description: {0}.
REQUIREMENT: If a character description is provided, replace general terms like "person", "human" in groups (2) Medium shots and (4) Artistic shots with this specific description.

Based on international photography experience and the visual style of contemporary architectural magazines, analyze the uploaded image, then propose 20 of the most impressive artistic shots for this project.

Each shot is written as an image-generation prompt for AI Nano Banana, describing specific camera angles, lighting, weather, composition, lens, visual emotion, not in JSON format.

Divide into 4 basic shot groups as follows:

1️⃣ 5 Wide shots
• Describe the overall building and surrounding landscape.
• Each shot should have different lighting and weather effects: sunrise, noon, sunset, night, rain, or early mist.
• Specify light direction, camera angle (e.g., high angle, eye-level, 45-degree angle, from the entrance…).

2️⃣ 5 Medium shots
• Focus on the relationship between space and humans. Each shot MUST have a human element (e.g., a person reading, walking, or interacting with the space).
• Describe composition, depth, lighting perspective, materials, shadows, contrast.
• Mandatory: People in the photo must be active INSIDE the project (e.g., in the living room, lobby, hallway, balcony...), not on the street or far from the building.

3️⃣ 5 Detailed close-up shots
• Focus on material details, artistic architectural structures, and exquisite architectural highlights.
• Could be door handles, wood grain, metal joints, or lighting effects on special material surfaces.

4️⃣ 5 Artistic shots
• Focus on main subjects like people (use character description if provided), leaves, birds, vehicles. The focused subject will take up a large portion of the frame. The main building will be blurred in the background, creating a depth effect (foreground – background separation).

🔴 ADDITIONAL REQUIREMENT FOR RESORT/PLANNING:
If you analyze the image as a Masterplan or Resort/Urban overall perspective, MANDATORY to add a 5th group:

5️⃣ 5 Specific Structure Prompts
• From the overall planning, extract and imagine the detailed architecture of the 5 most important structures (e.g., Typical Villa, Clubhouse, Restaurant, Welcome Gate, Utility Area...).
• Write prompts to render a close-up view of each structure.
• Describe clearly: Architecture, materials, mood, and immediate landscape.

Detailed requirements for each shot:
• Write in English with short, concise, highly evocative descriptions.
• Do not use JSON format, only text description.
• Prioritize emotional, visual, and photographic technical language (e.g., raking light, leading lines, blurred foreground, deep background, tilt-shift lens, dynamic composition, depth of field, cinematic tone…).
• Goal: Recreate the most authentic photography emotions, lighting, and art – helping AI Nano Banana create vivid, deep images with a professional and international magazine style.
Important: Only return the requested shot groups. No introduction, introduction, or conclusion.`,
        generateFromPlan: `From now on, act as an interior design expert and an image-generation prompt expert for AI tools (like Midjourney, DALL-E, etc.). You have deep skills in composition, form, and architectural plan analysis.

Your task is to:

Identify the room type based on the plan I upload (e.g., Living Room, Master Bedroom, Kitchen & Dining).

Analyze the plan to determine the location of main furniture (bed, sofa, cabinet, dining table, kitchen, etc.) and the standard front-facing view.

Write an image-generation prompt (in English) following this strict format:

View: Always a front-facing (direct) view, do not describe complex camera directions (e.g., do not use "looking up from below").

Content: Describe the position and type of furniture in the frame according to the front-facing view.

Taboo: Absolutely do not describe colors, materials, or textures. Do not describe objects outside the main frame (e.g., in a bedroom looking at the headboard, do not describe the TV stand).

Output format: Only display the complete prompt, starting with the phrase:

Create an interior perspective front view of the plan space. It is a [Room type you identified]. View directly into... [Detailed description of furniture positions]. Use the moodboard image as a reference for this interior perspective. Make it as realistic as an architectural visualization with specific textures and details.

Do not show the analysis part, only show the Prompt.`,
        analyzePlanStyle: `You are an expert in interior plan visualization for real estate projects, specializing in colorized plans, 3D plans, and cutaway plan views. You have deep expertise in writing image-generation prompts for Gemini AI.

Task: When I upload a plan image, analyze the visualization style, colors, and lighting of that plan.

Important note: You must correctly identify the visualization style as:
- 2D technical colorized plan.
- 3D top-down view plan.
- Real photo of interior space from above.
- 3D cutaway plan view.

Goal: Write a specialized prompt in English so I can use that prompt to generate an image from an input 2D plan such that the result matches the style, colors, and lighting of the sample image you just analyzed.

Output requirements:
- Result in English.
- Specialized prompt for AI Nano Banana (Gemini 2.5 Flash).
- The command must be general enough to apply to many different plans while maintaining the correct sample style.
- DO NOT show analysis, NO introduction, ONLY display the Prompt content.`,
        generateMoodboard: "As a professional interior designer, based on the image and theme provided by the user: '{0}'. Your task is to create a beautiful moodboard. The moodboard should include: a color palette extracted from the image, inspiration images matching the theme, material samples (fabric, wood, metal), and related keywords. Arrange these elements in a clean, modern layout. The final output should be a single, cohesive moodboard image.",
        generateMoodboardWithReference: "As a professional designer, you are provided with 2 images and 1 theme. IMAGE 1 is the main inspiration for the **theme and subject**. IMAGE 2 is the reference for **style, color palette, and atmosphere**. The theme is: '{0}'. Your task is to create a beautiful moodboard combining both elements. The moodboard should include: a color palette extracted from the **style reference image**, inspiration images matching the **theme from the main image**, material samples (fabric, wood, metal), and related keywords. Arrange these elements in a clean, modern layout. The final output should be a single, cohesive moodboard image.",
        extendView: `You are an AI image editing expert with "outpainting" capabilities. The user has provided an image with fuchsia pink (#FF00FF) areas at the borders. This is a "green screen" specifying the area to be drawn. Your task is to replace ALL of this pink area by seamlessly and logically extending the content from the central image. You must preserve 100% of the original central image content. The final result must be a complete image with no pink remaining.`,
        changeStylePrompt: `You are an interior designer with over 20 years of experience, specializing in high-end space design and international interior style transformation consulting. You have the capacity to: Deeply and systematically understand all interior design styles (Modern, Minimalism, Japandi, Scandinavian, Wabi-sabi, Industrial, Neoclassical, Luxury, Contemporary, Mid-century, Tropical, Mediterranean, Retro, Vintage, Boho, Classic, Zen, Art Deco…). High aesthetic thinking, having participated in and won many international interior design awards. Ability to analyze spatial composition from photos, clearly identifying: colors, lighting, materials, furniture, decorative details. Convert analysis into professional image generation prompts for AI Nano Banana, describing accurately, richly, and optimizing output quality. Task: When a user uploads an interior photo and provides a desired style, you must: Analyze the space in the original photo (composition, lighting, materials, main/secondary furniture). Write 01 complete prompt for AI Nano Banana to create a version of the space according to the specified interior style. The prompt should focus heavily on: Dominant colors & color palette according to the requested style Surface materials (wood, stone, metal, fabric, leather, glass…) Details & design of furniture according to the new style (form, lines, chair legs, armrests, cabinet shape, borders, edges…) Lighting (natural/lamp/softness, contrast, mood) Overall space & emotion correct to the style Allow changing/adding furniture if necessary to match the specified style, but must ensure: Do not break the main composition of the space Additional furniture must match the style, with clear descriptions of material – color – design The overall still looks like a “same space” version but “re-styled” according to the new style Mandatory Rules (Constraints): ✅ Only output the PROMPT part (no explanation, no analysis, no further suggestions). ✅ Keep the spirit and structure of the original space (do not change layout excessively). ✅ Allowed to change furniture details and add furniture to match the specified style. ✅ All changes must be consistent according to the style: color – material – surface – finish – lighting – pattern. ✅ Prompt must prioritize high realism, correct interior context, sharp images. Output: A complete prompt, ready to be pasted directly into AI Nano Banana. Clear, richly described, well-structured prompt, optimizing output quality. User request: "{0}"`,
        generateFromPlanningImage: `Act as a senior Urban Planning Architect with 20 years of experience and a professional prompt writing expert for Gemini AI. Task: Analyze the uploaded planning image (type of planning, style, specific structures, suitable context and lighting) then write a complete image generation prompt in ENGLISH to turn this planning drawing into a realistic architectural photo. Structure: Realistic Master Plan photo bird's-eye view from above of [type of planning], design style, [Items in the drawing]. Create a suitable surrounding context and environment. Lighting: Clearly describe the lighting (e.g., Volumetric God Rays, Golden Hour, Low-Key Lighting), camera angle (Wide Shot, Low Angle). Prioritize Vietnamese contexts. Only output the final prompt content, no introduction or analysis, under 130 words.`,
        generateVr360Prompt: `You are an expert in creating 360-degree Panorama images (VR 360). Your task is to create a prompt describing a space in 'Equirectangular projection'. 
            The output image MUST be a wide panoramic strip (2:1 ratio), fully covering 360 degrees around the camera point. 
            The left and right edges of the image must match perfectly to create a seamless continuous space when wrapped.
            Use professional keywords like: "equirectangular projection", "360 degree panorama", "spherical projection", "VR view", "full sphere".
            User request: "{0}".`,
        generateTextureMap: `You are an expert in materials and 3D textures (PBR materials). Your task is to create a single "{0}" map channel from this material photo.
MANDATORY TECHNICAL REQUIREMENTS (CRITICAL):
1. SEAMLESS TILING: The texture must be able to repeat infinitely (tileable) WITHOUT VISIBLE SEAMS at the edges. Left edge matches right edge, top edge matches bottom edge.
2. DELIGHTING: Completely remove shadows and specular highlights. The texture must be flat, only showing the intrinsic color (Albedo) of the material. No directional lighting allowed.
3. REMOVE PERSPECTIVE: Convert to a flat front-facing (Orthographic) view, no tilt or distortion.
4. PRESERVE DETAIL: Preserve the characteristic grain, grit, and roughness of the original material.

Map "{0}" Definition:
- Diffuse/Albedo: Flat color map, no shadows, seamless.
- Normal: Normal map (purple/blue) showing bump details.
- Displacement: Height map (white high, black low).
- Roughness: Roughness map (white rough, black shiny).
- AO: Ambient Occlusion map showing shadows in crevices.

Result: 01 high-quality square texture image, seamless and delighted.`,
    },
    constants: {
        interiorLightingOptions: constants.interiorLightingOptionsEn,
        exteriorLightingOptions: constants.exteriorLightingOptionsEn,
        predefinedReferenceImages: constants.predefinedReferenceImages,
        predefinedMaterialImages: constants.predefinedMaterialImages,
        ASPECT_RATIO_LABELS: constants.ASPECT_RATIO_LABELS,
        stylePrompts: constants.stylePrompts,
        contextPrompts: constants.contextPrompts,
        lightingPrompts: constants.lightingPrompts,
        cameraAnglePrompts: constants.cameraAnglePromptsEn,
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
