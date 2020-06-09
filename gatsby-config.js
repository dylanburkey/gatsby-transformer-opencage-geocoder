{
      resolve: `gatsby-transformer-opencage-geocoder`,
      options: {
// Your OpenCage API key      
        api_key: `894c421952454287893137d7157ef99e`,
        
// An array of configurations per node type to geocode        
        nodeTypes: [
// Forward Geocoding
          { nodeType: `NodeTypeToBeGeocoded`,
            addressFields: [
              'Address1', 'Address2', 'Address3', 'Town', 'Country', 'Postcode'],
            addFullResult: false,
          },
          
// Reverse Geocoding
          { nodeType: `NodeTypeToBeReverseGeocoded`,
            positionFields: {
              lat: `lat`,
              lon: `lon`
            },
            addFullResult: true,
          }
          
        ]
      }
    }