function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number. Please input only positive number.";
  }

  let totalTicketAmount = ticketSale * 120;
  let reduction = 500 + 8 * 50;
  let remaining = totalTicketAmount - reduction;
  return remaining;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid. Please input only string";
  }

  const lastChar = name.charAt(name.length - 1).toLowerCase();
  const goodChars = ["a", "y", "i", "e", "o", "u", "w"];
  for (const char of goodChars) {
    if (lastChar === char) {
      return "Good Name";
    }
  }
  return "Bad Name";
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array. Please input an array";
  }

  let onlyNumbers = [];
  for (const item of array) {
    if (typeof item === "number" && !isNaN(item)) {
      onlyNumbers.push(item);
    }
  }
  return onlyNumbers;
}

function password(obj) {
  if (
    typeof obj !== "object" ||
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    obj.birthYear < 1000 ||
    obj.birthYear > 9999
  ) {
    return "Invalid";
  }

  return `${obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)}#${
    obj.name
  }@${obj.birthYear}`;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = 0;
  for (let number of arr) {
    if (number >= 3000) {
      number = number - (number / 100) * 20;
    }
    totalIncome += number;
  }

  const savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
