import { BookOpen, Eye, HelpCircle } from "lucide-react";

export default function TestCard() {
  return (
    <div className="flex gap-5 py-10">
      <div className="nes-container is-rounded p-0! bg-white rounded-lg shadow w-xs flex flex-col overflow-hidden my-16 hover:-translate-y-1 hover:scale-105 transition-transform duration-400 ease-in-out nes-container is-rounded">
        <div className="py-20 bg-neutral-500 text-center">
          <p className="text-2xl font-bold">Listening</p>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="">
            <p className="text-lg font-bold text-gray-900">Listening</p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            tests 100
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HelpCircle className="w-4 h-4" />
            questions 539
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            views 786478
          </div>
        </div>
      </div>
      <div className="nes-container is-rounded p-0! bg-white rounded-lg shadow w-xs flex flex-col overflow-hidden my-16 hover:-translate-y-1 hover:scale-105 transition-transform duration-400 ease-in-out nes-container is-rounded">
        <div className="py-20 bg-neutral-500 text-center">
          <p className="text-2xl font-bold">Reading</p>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="">
            <p className="text-lg font-bold text-gray-900">Reading</p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            tests 42
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HelpCircle className="w-4 h-4" />
            questions 489
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            views 81000
          </div>
        </div>
      </div>
      <div className="nes-container is-rounded p-0! bg-white rounded-lg shadow w-xs flex flex-col overflow-hidden my-16 hover:-translate-y-1 hover:scale-105 transition-transform duration-400 ease-in-out nes-container is-rounded">
        <div className="py-20 bg-neutral-500 text-center">
          <p className="text-2xl font-bold">Speaking</p>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="">
            <p className="text-lg font-bold text-gray-900">Speaking</p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            tests 46
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HelpCircle className="w-4 h-4" />
            questions 45
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            views 86467
          </div>
        </div>
      </div>
      <div className="nes-container is-rounded p-0! bg-white rounded-lg shadow w-xs flex flex-col overflow-hidden my-16 hover:-translate-y-1 hover:scale-105 transition-transform duration-400 ease-in-out nes-container is-rounded">
        <div className="py-20 bg-neutral-500 text-center">
          <p className="text-2xl font-bold">Writing</p>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div className="">
            <p className="text-lg font-bold text-gray-900">Writing</p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            tests 60
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HelpCircle className="w-4 h-4" />
            questions 60
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            views 82037
          </div>
        </div>
      </div>
    </div>
  );
}
