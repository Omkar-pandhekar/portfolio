import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy, Target, TrendingUp } from "lucide-react";
import LeetCodeStatsSkeleton from "./leetcode-stats-skeleton";

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  acceptanceRate: number;
}

interface SubmissionStats {
  difficulty: string;
  count: number;
  submissions: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Replace with your LeetCode username
  const LEETCODE_USERNAME = "Omkar_pandhekar";

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);

        // Use our server-side API route to avoid CORS issues
        const response = await fetch(
          `/api/leetcode?username=${LEETCODE_USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        const userData = data.data.matchedUser;
        const submitStats = userData.submitStats.acSubmissionNum;

        // Process the data
        const processedStats: LeetCodeStats = {
          totalSolved:
            submitStats.find((s: SubmissionStats) => s.difficulty === "All")
              ?.count || 0,
          easy:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Easy")
              ?.count || 0,
          medium:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Medium")
              ?.count || 0,
          hard:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Hard")
              ?.count || 0,
          ranking: userData.profile.ranking || 0,
          acceptanceRate: (() => {
            const allSubmissions = submitStats.find(
              (s: SubmissionStats) => s.difficulty === "All"
            );
            if (allSubmissions && allSubmissions.submissions > 0) {
              return Math.round(
                (allSubmissions.count / allSubmissions.submissions) * 100
              );
            }
            return 0;
          })(),
        };

        setStats(processedStats);
      } catch {
        // Fallback to mock data for development
        setStats({
          totalSolved: 0,
          easy: 0,
          medium: 0,
          hard: 0,
          ranking: 0,
          acceptanceRate: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return <LeetCodeStatsSkeleton />;
  }

  if (!stats) {
    return (
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">LeetCode Statistics</h2>
        <p className="text-red-400">Failed to load LeetCode data</p>
      </div>
    );
  }

  const difficultyIcons = {
    easy: "🟢",
    medium: "🟡",
    hard: "🔴",
  };

  return (
    <div className="space-y-6 pt-20 ">
      {/* Header */}
      <div className="text-left space-y-2">
        <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Leetcode Statisctics
        </p>
        <p className="text-gray-400">@{LEETCODE_USERNAME}</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Solved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-6 "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Problems Solved</p>
              <p className="text-3xl font-bold">{stats.totalSolved}</p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
        </motion.div>

        {/* Ranking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-6 "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className=" text-sm">Ranking</p>
              <p className="text-3xl font-bold ">
                #{stats.ranking.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        {/* Acceptance Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-6 "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className=" text-sm">Acceptance Rate</p>
              <p className="text-3xl font-bold ">{stats.acceptanceRate}%</p>
            </div>
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>
      </div>

      {/* Difficulty Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-6 "
      >
        <h3 className="text-xl font-semibold mb-4">Difficulty Distribution</h3>
        <div className="space-y-4">
          {[
            { difficulty: "easy", count: stats.easy, color: "bg-green-500" },
            {
              difficulty: "medium",
              count: stats.medium,
              color: "bg-yellow-500",
            },
            { difficulty: "hard", count: stats.hard, color: "bg-red-500" },
          ].map((item) => (
            <div
              key={item.difficulty}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {
                    difficultyIcons[
                      item.difficulty as keyof typeof difficultyIcons
                    ]
                  }
                </span>
                <span className=" capitalize font-medium">
                  {item.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{
                      width: `${
                        stats.totalSolved > 0
                          ? (item.count / stats.totalSolved) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                <span className=" font-semibold min-w-[3rem] text-right">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LeetCodeStats;
