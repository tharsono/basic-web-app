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
    const numbers = query.split(":")[1].split(",").map(num => parseFloat(num.trim()));
    const maxNumber = Math.max(...numbers); 
    return "The largest number is " + maxNumber + ".";
  }

  if (query.toLowerCase().includes("plus")) {
    const first = parseFloat(query.split("plus")[0].trim());
    const second = parseFloat(query.split("plus")[1].trim());
    return "The sum is " + (first + second) + ".";
  }

  return ""
}
