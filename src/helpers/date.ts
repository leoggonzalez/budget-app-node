import { Entry } from "../model/entry";

interface Month {
  id: string;
  name: string;
  monthNumber: number;
}

export function getNextMonths(months: number): Month[] {
  const now = new Date();
  const monthsReturn: Month[] = [];

  for (let i = 0; i < months; i++) {
    const monthNumber = now.getMonth() + i;
    const date = new Date(
      now.getFullYear(),
      monthNumber < 12 ? monthNumber : monthNumber - 12,
      now.getDate()
    );
    const monthName = date.toLocaleString("default", { month: "long" });
    monthsReturn.push({
      id: monthName.toLowerCase(),
      name: monthName,
      monthNumber: date.getMonth(),
    });
  }

  return monthsReturn;
}

export function amountPerMonth(item: Entry, month: Month): string {
  const itemMonth = new Date(item.createdAt);
  if (itemMonth.getMonth() === month.monthNumber) {
    return `${item.amount} €`;
  }
  return "";
}

export function getEntriesPerMonth(items: Entry[], month: Month): Entry[] {
  return items.filter((item) => {
    const date = new Date(item.createdAt);
    return date.getMonth() === month.monthNumber;
  });
}
