declare module "leetcode-calendar" {
  interface LeetCodeCalendarProps {
    username: string;
    blockSize?: number;
    blockMargin?: number;
    fontSize?: number;
    theme?: {
      light: string[];
      dark: string[];
    };
    style?: React.CSSProperties;
  }

  const LeetCodeCalendar: React.FC<LeetCodeCalendarProps>;
  export default LeetCodeCalendar;
}
