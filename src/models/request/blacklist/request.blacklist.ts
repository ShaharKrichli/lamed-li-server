export const repoExcludeRequests = ["steps", "entitleDesc",
    "parentInd", "isSupportedUnderCategory", "isSupported", "openType"];


export const execludeAllButDocs = ["steps", "entitleDesc",
"parentInd", "isSupportedUnderCategory", "isSupported", "openType",'catId','name','desc','isCommingSoon']

export const excludeRequests = ["steps", "entitleDesc",
    "parentInd", "isSupportedUnderCategory", "isSupported", "openType"] as const;
export type ExcludeRequests = typeof excludeRequests[number];

export const excludeRequestButCatId = ["steps", "entitleDesc", "parentInd", "id", 'desc'] as const
export type ExcludeRequestsButCatId = typeof excludeRequestButCatId[number];


export const excludePersonalRequests = ["personalDocuments", "personalRequests"] as const
export type ExcludePersonalRequests = typeof excludePersonalRequests[number];