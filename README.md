## \<gid-recommend-concepts>

A data component acting as a wrapper  on gid-api used for handling rest calls for  fetching
recommended concepts against a particular column and then verifying one/more concept(s)


   The following is used for fetching the recommended concepts against a particular column.
   Here, 'column' is a mandatory parameter

    <gid-recommend-concepts
    api-url="https://ql50yzu0fj.execute-api.us-east-1.amazonaws.com/dev"
	 column = '200009'
	 recommendedconcepts = {{recommendedconcepts}}>
	 </gid-recommend-concepts>
 
 
   API endpoint:

    GET /columns/{columnId}/recommendedconcepts

   Input:

     - Column Id 

   Sample Input: (Query params)

     GET /columns/200009/recommendedconcepts
     
   Output:

     - List of recommended concepts


   The output of this components will be as follows:

    {
		"recommendedconcepts": [{
			"id": "100002",
			"label": "FICO-Score",
			"percentage": 65.0,
			"verified": "Y"
		}, {
			"id": "100349",
			"label": "Account-Number",
			"percentage": 48.0,
			"verified": "Y"
		}, {
			"id": "100355",
			"label": "Annual-Income",
			"percentage": 32.0,
			"verified": "F"
		}, {
			"id": "100033",
			"label": "City",
			"percentage": 0.0,
			"verified": "N"
		}]
	}



   The following is used for verifying a particular recommended concept.
    Here, 'column', 'be-verified' , 'verify-val'  and 'concept' are mandatory parameters

		<gid-recommend-concepts
		api-url="https://ql50yzu0fj.execute-api.us-east-1.amazonaws.com/dev"
		column = '200009'
		be-verified = true
		concept = '100002'
		verify-val = 'YES'
		verifiedconcepts = {{verifiedconcepts}}> 
		</gid-recommend-concepts>

   API endpoint:

    PUT /columns/{columnId}/recommendedconcepts/{conceptId}
    
   Sample Input: (Query params)

     PUT /columns/200009/recommendedconcepts/100002/verify?hv=Y

   Input:

     - Column Id 
     - Concept Id

   Output:

     - Details of the concept verified
     
   The output of this components will be as follows:

	  {
		"id": "400021",
		"percentage": 65.0,
		"verified": "Y",
		"columnId": "200009",
		"concept": {
			"id": "100002",
			"label": "FICO-Score"
		},
		"timeStamp": 1501673865370
	}

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.