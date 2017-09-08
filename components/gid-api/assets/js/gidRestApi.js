var apiPath = {
		  "lobs":{
			  "default": "/lobs" 
		  },
		  "concepts": {
			"default": "/lobs/{lob}/domains"
		  },
		  "applications": {
		    "default": "/domains/{concept}/applications",
		    "all": "/applications"
		  },
		  "databases": {
		    "default": "/domains/{concept}/applications/{application}/databases",
		    "all": "/applications/{application}/databases"
		  },
		  "schemas": {
		    "default": "/domains/{concept}/applications/{application}/databases/{database}/schemas",
		    "all": "/applications/{application}/databases/{database}/schemas"
		  },
		  "tables": {
		    "default": "/domains/{concept}/schemas/{schema}/tables",
		    "all": "/schemas/{schema}/tables"
		  },
		  "columns": {
			  "table": {
			   "default":"/domains/{concept}/tables/{table}/columns",
			   "all":"/tables/{table}/columns"
			  },
			  "schema": {
			   "default" :"/domains/{concept}/schemas/{schema}/columns",
			   "all":"/schemas/{schema}/columns"
			  },
			  "database": {
			   "default" :"/domains/{concept}/applications/{application}/databases/{database}/columns",
			   "all":"/applications/{application}/database/{database}/columns"
			  },
			  "application": {
			   "default": "/domains/{concept}/applications/{application}/columns",
			   "all" : "/applications/{application}/columns"
			  }
		  },
		  "get-samples": {
			 "default": "/samples"
		  },
		  "recommended-concepts": {
			 "default": "/columns/{column}/domains"
		  },
		  "verify-concept": {
			  "default": "/columns/{column}/domains/{concept}"
		  },
		  "list-concepts": {
			  "default": "/domains"
		  },
		  "concept-details":{
			  "default": "/domains/{concept}"
		  },
		  "curate-concept": {
			  "default": "/domains/{concept}/curation"
		  },
		  "create-concept": {
			  "default": "/domains"
		  },
		  "edit-concept": {
			  "default": "/domains/{concept}"
		  },
		  "remove-concept": {
			  "default": "/domains/{concept}"
		  },
		  "auth": {
			  "default": "/api/security/api-token-v1"
		  }
		};
