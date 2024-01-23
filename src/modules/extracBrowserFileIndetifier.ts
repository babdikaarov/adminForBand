export function extractIdentifierFromUrl(url: string) {
   // Define a regex pattern to match the UUID part
   const regex = /blob:\/\/[a-z]+:\/\/[0-9a-f-]+/i;

   // Use the regex to extract the matched string
   const match = url.match(regex);

   // Check if there's a match and return the extracted identifier
   if (match && match.length > 0) {
      return match[0].split("//")[1]; // Extract the UUID part
   }

   // Return null if no match is found
   return null;
}
