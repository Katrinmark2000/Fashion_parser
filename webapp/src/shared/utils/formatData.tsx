import { format } from "date-fns";
import { ru } from "date-fns/locale";

/**
 * Форматирует дату в человекочитаемый вид.
 * @param dateString ISO-строка даты (например: "2025-08-06T11:15:00Z")
 * @param locale Язык локализации (по умолчанию русская)
 * @param pattern Шаблон формата (по умолчанию "d MMMM yyyy")
 * @returns Отформатированная строка даты
 */
export const formatDate = (
  dateString: string,
  locale = ru,
  pattern = "d MMMM yyyy, HH:mm"
): string => {
  const date = new Date(dateString);
  return format(date, pattern, { locale });
};