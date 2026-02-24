export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "tharsono";
  }

  if (query.toLowerCase().includes("what is your andrew id")) {
    return "My Andrew ID is tharsono.";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const numbers = query
      .match(/[-]?\d+(\.\d+)?/g) // Extract numbers (including decimals and negatives)
      ?.map(Number); // Convert to numbers

    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return `The largest number is ${largest}.`;
    }
    return "No valid numbers found in the query.";
  }

  if (query.toLowerCase().startsWith("what is") && query.toLowerCase().includes("plus")) {
    const parts = query
      .toLowerCase()
      .replace("what is", "")
      .split("plus");
    const first = parseFloat(parts[0].trim());
    const second = parseFloat(parts[1].trim());
  
    if (!isNaN(first) && !isNaN(second)) {
      return `The sum is ${first + second}.`;
    }
    return "Invalid numbers provided for addition.";
  }
  

  return ""
}
