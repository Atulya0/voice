import { ChevronRightIcon, DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Tone = (): JSX.Element => {
  // Tone distribution data
  const toneDistribution = [
    { type: "High Tone", percentage: "50%" },
    { type: "Medium Tone", percentage: "15%" },
    { type: "Low Tone", percentage: "30%" },
    { type: "Dead Air", percentage: "05%" },
  ];

  return (
    <div className="flex-1 p-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="font-inter font-semibold text-black text-[32px] mb-4">
          Uploads
        </h1>
        <div className="flex items-center gap-2 text-lg">
          <span className="font-inter font-medium text-[#a0a0a0]">
            Dashboard
          </span>
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          <span className="font-inter font-medium text-black">
            Uploads
          </span>
        </div>
      </div>

      {/* File Upload Area */}
      <Card className="w-full h-[242px] bg-white rounded-[20px] border border-[#b3b3b3]">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-[45px] h-[45px] mx-auto mb-6">
              <div className="relative w-[41px] h-[41px]">
                <img
                  className="absolute w-[41px] h-[19px] top-[22px] left-0"
                  alt="Vector"
                  src="/vector-14.svg"
                />
                <img
                  className="absolute w-[26px] h-8 top-0 left-2"
                  alt="Vector"
                  src="/vector-18.svg"
                />
              </div>
            </div>
            <div className="font-inter font-normal text-[#707070] text-lg mb-2">
              Drop your audio file here or click to browse
            </div>
            <div className="font-inter font-normal text-[#a0a0a0] text-lg">
              Supported formats: MP3, WAV
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center font-inter font-normal text-[#707070] text-2xl">
        Or
      </div>

      {/* URL Input */}
      <div className="space-y-2">
        <label className="font-inter font-normal text-black text-sm">
          Paste audio URL
        </label>
        <Input
          className="h-11 bg-white rounded-lg border border-[#b3b3b3]"
          placeholder="https://"
        />
      </div>

      {/* Audio Player Card */}
      <Card className="w-full bg-white rounded-[20px] border border-[#b3b3b3]">
        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-inter font-semibold text-black text-[28px] mb-2">
                Rony Goyal
              </h3>
              <p className="font-inter font-medium text-[#a0a0a0] text-lg">
                Jan 15 2024, 4:48 PM
              </p>
            </div>
            <Button className="bg-black rounded-[13px] h-[52px] px-6">
              <span className="font-inter font-medium text-white text-lg mr-2">
                Download
              </span>
              <DownloadIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex">
                <img
                  className="w-[301px] h-[148px]"
                  alt="Waveform"
                  src="/vector-19.svg"
                />
                <img
                  className="w-[301px] h-[148px]"
                  alt="Waveform"
                  src="/vector-19.svg"
                />
                <img
                  className="w-[301px] h-[148px]"
                  alt="Waveform"
                  src="/vector-19.svg"
                />
              </div>
            </div>
            <div className="text-center font-inter font-medium text-black text-lg">
              00:10 / 03:16
            </div>
            <div className="flex justify-center">
              <img
                className="w-[193px] h-[57px]"
                alt="Audio controls"
                src="/group-1000006073.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent/Customer Distribution */}
      <div className="flex gap-8">
        <div className="flex items-center gap-4">
          <div className="w-[23px] h-[23px] bg-black rounded-[11.5px]" />
          <span className="font-inter font-medium text-black text-lg">
            Agent: 66%
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[23px] h-[23px] bg-[#bb86fa] rounded-[11.5px]" />
          <span className="font-inter font-medium text-black text-lg">
            Customer: 34%
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="tone" className="w-full max-w-[552px]">
        <TabsList className="w-full h-[53px] bg-white rounded-2xl shadow-[0px_0px_8px_#00000040] p-1.5">
          <TabsTrigger
            value="call-insights"
            className="rounded-xl px-5 py-[9px] font-inter font-medium text-black text-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Call Insights
          </TabsTrigger>
          <TabsTrigger
            value="transcript"
            className="rounded-xl px-5 py-[9px] font-inter font-medium text-black text-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Transcript
          </TabsTrigger>
          <TabsTrigger
            value="tone"
            className="rounded-xl px-5 py-[9px] font-inter font-medium text-black text-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Tone
          </TabsTrigger>
          <TabsTrigger
            value="sentiment"
            className="rounded-xl px-5 py-[9px] font-inter font-medium text-black text-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Sentiment
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Energy Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-inter font-medium text-black text-lg mb-4">
            Agent's Energy
          </h2>
          <Card className="w-full h-[207px] bg-white rounded-[20px] border border-[#b3b3b3]">
            <CardContent className="p-6">
              {/* Energy chart content would go here */}
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="font-inter font-medium text-black text-lg mb-4">
            Customer's Energy
          </h2>
          <Card className="w-full h-[207px] bg-white rounded-[20px] border border-[#b3b3b3]">
            <CardContent className="p-6">
              {/* Energy chart content would go here */}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tone Distribution */}
      <div>
        <h2 className="font-inter font-medium text-black text-2xl mb-6">
          Tone Distribution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toneDistribution.map((tone, index) => (
            <Card
              key={`tone-${index}`}
              className="w-full h-[125px] bg-white rounded-[10px] border border-[#b4b4b4]"
            >
              <CardContent className="p-[18px]">
                <div className="font-inter font-normal text-[#6c6c6c] text-lg mb-2">
                  {tone.type}
                </div>
                <div className="font-inter font-bold text-[#bb86fa] text-[44px]">
                  {tone.percentage}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};