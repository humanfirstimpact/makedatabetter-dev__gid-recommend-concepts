var apiPath = {
		"lobs": "/lobs",
	    "concepts": "/lobs/{lob}/domains",
	    "applications": "/domains/{concept}/applications",
	    "databases": "/domains/{concept}/applications/{application}/databases",
	    "schemas": "/domains/{concept}/applications/{application}/databases/{database}/schemas",
	    "tables": "/domains/{concept}/schemas/{schema}/tables",
	    "columns": "/domains/{concept}/tables/{table}/columns",         
	    "get-samples": "/samples",
	    "recommended-concepts": "/columns/{column}/domains",
	    "verify-concept": "/columns/{column}/domains/{concept}",
	    "list-concepts": "/domains",
	    "concept-details": "/domains/{concept}",
	    "curate-concept": "/domains/{concept}/curation",
	    "create-concept": "/domains",
	    "edit-concept": "/domains/{concept}",
	    "remove-concept": "/domains/{concept}",
	    "auth": "/api/security/api-token-v1"
	};
