import {
  BookOpen,
  Clock,
  FileText,
  MessageCircle,
  Play,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const icons = [Users, Clock, Play, BookOpen, FileText, Play, MessageCircle];

const featureKeys = [
  "feature_1",
  "feature_2",
  "feature_3",
  "feature_4",
  "feature_5",
  "feature_6",
  "feature_7",
];

const CourseFeature = () => {
  const t = useTranslations("products.features");
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">এই কোর্সে যা থাকছে</h3>
      <div className="space-y-3 font-medium">
        {featureKeys.map((key, idx) => {
          const Icon = icons[idx];
          return (
            <div className="flex items-center gap-3" key={key}>
              <Icon className="w-5 h-5 text-gray-500" key={`icon-${key}`} />
              <span className="text-gray-700">{t(key)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFeature;
