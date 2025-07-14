import React from "react";

export const Dashboard = (): JSX.Element => {
  // Enhanced sample data for charts
  const monthlyData = [
    { month: "Jan", uploads: 45, records: 38, processed: 35, failed: 3 },
    { month: "Feb", uploads: 52, records: 42, processed: 40, failed: 2 },
    { month: "Mar", uploads: 48, records: 45, processed: 43, failed: 2 },
    { month: "Apr", uploads: 61, records: 51, processed: 48, failed: 3 },
    { month: "May", uploads: 55, records: 48, processed: 46, failed: 2 },
    { month: "Jun", uploads: 67, records: 58, processed: 55, failed: 3 },
    { month: "Jul", uploads: 72, records: 65, processed: 62, failed: 3 },
    { month: "Aug", uploads: 68, records: 61, processed: 58, failed: 3 },
    { month: "Sep", uploads: 74, records: 68, processed: 65, failed: 3 },
    { month: "Oct", uploads: 81, records: 75, processed: 72, failed: 3 },
    { month: "Nov", uploads: 89, records: 82, processed: 79, failed: 3 },
    { month: "Dec", uploads: 95, records: 88, processed: 85, failed: 3 },
  ];

  const recentActivity = [
    { id: 1, action: "Call recording uploaded", user: "John Smith", time: "2 minutes ago", type: "upload", status: "success" },
    { id: 2, action: "Tone analysis completed for Meeting #1247", user: "Sarah Johnson", time: "8 minutes ago", type: "analysis", status: "success" },
    { id: 3, action: "Customer call processed", user: "Mike Davis", time: "15 minutes ago", type: "processing", status: "success" },
    { id: 4, action: "Failed to process audio file", user: "Emma Wilson", time: "32 minutes ago", type: "error", status: "failed" },
    { id: 5, action: "Sentiment analysis completed", user: "Alex Brown", time: "45 minutes ago", type: "analysis", status: "success" },
    { id: 6, action: "New user registered", user: "Lisa Garcia", time: "1 hour ago", type: "user", status: "success" },
    { id: 7, action: "Bulk upload started (25 files)", user: "David Miller", time: "1.5 hours ago", type: "upload", status: "processing" },
    { id: 8, action: "Weekly report generated", user: "System", time: "2 hours ago", type: "report", status: "success" },
    { id: 9, action: "Audio quality check failed", user: "Tom Anderson", time: "3 hours ago", type: "error", status: "failed" },
    { id: 10, action: "Settings updated", user: "Jennifer Lee", time: "4 hours ago", type: "settings", status: "success" },
  ];

  const topPerformers = [
    { name: "John Smith", uploads: 45, successRate: 98, avgDuration: "4:32" },
    { name: "Sarah Johnson", uploads: 38, successRate: 96, avgDuration: "3:45" },
    { name: "Mike Davis", uploads: 32, successRate: 94, avgDuration: "5:12" },
    { name: "Emma Wilson", uploads: 28, successRate: 92, avgDuration: "3:28" },
    { name: "Alex Brown", uploads: 25, successRate: 90, avgDuration: "4:15" },
  ];

  const audioQualityMetrics = [
    { quality: "Excellent", count: 245, percentage: 65, color: "bg-green-500" },
    { quality: "Good", count: 89, percentage: 24, color: "bg-blue-500" },
    { quality: "Fair", count: 28, percentage: 7, color: "bg-yellow-500" },
    { quality: "Poor", count: 15, percentage: 4, color: "bg-red-500" },
  ];

  const processingTimes = [
    { timeRange: "< 1 min", count: 156, percentage: 42 },
    { timeRange: "1-3 min", count: 134, percentage: 36 },
    { timeRange: "3-5 min", count: 58, percentage: 15 },
    { timeRange: "5+ min", count: 25, percentage: 7 },
  ];

  const weeklyTrends = [
    { day: "Mon", uploads: 45, sentiment: 7.2, tone: 6.8 },
    { day: "Tue", uploads: 52, sentiment: 7.5, tone: 7.1 },
    { day: "Wed", uploads: 48, sentiment: 6.9, tone: 6.5 },
    { day: "Thu", uploads: 61, sentiment: 7.8, tone: 7.4 },
    { day: "Fri", uploads: 55, sentiment: 7.3, tone: 6.9 },
    { day: "Sat", uploads: 32, sentiment: 8.1, tone: 7.8 },
    { day: "Sun", uploads: 28, sentiment: 8.3, tone: 8.0 },
  ];

  return (
    <div className="flex-1 p-8 space-y-8">
      <div className="mb-8">
        <h1 className="font-inter font-semibold text-black text-[32px] mb-4">
          Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome back! Here's what's happening with your audio analytics today.
        </p>
      </div>
      
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Uploads</h3>
              <p className="text-3xl font-bold text-blue-600">1,247</p>
              <p className="text-sm text-green-600 mt-1">+18% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Processed Records</h3>
              <p className="text-3xl font-bold text-green-600">1,089</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Currently Processing</h3>
              <p className="text-3xl font-bold text-orange-600">23</p>
              <p className="text-sm text-orange-600 mt-1">Active jobs</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Success Rate</h3>
              <p className="text-3xl font-bold text-purple-600">96.8%</p>
              <p className="text-sm text-green-600 mt-1">+2.3% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Monthly Activity Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Monthly Upload Trends</h3>
          <div className="h-64">
            <div className="flex items-end justify-between h-48 px-2">
              {monthlyData.slice(-6).map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div 
                      className="w-3 bg-blue-500 rounded-t"
                      style={{ height: `${(data.uploads / 100) * 160}px` }}
                      title={`Uploads: ${data.uploads}`}
                    ></div>
                    <div 
                      className="w-3 bg-green-500 rounded-t"
                      style={{ height: `${(data.processed / 100) * 160}px` }}
                      title={`Processed: ${data.processed}`}
                    ></div>
                    <div 
                      className="w-3 bg-red-500 rounded-t"
                      style={{ height: `${(data.failed / 100) * 160}px` }}
                      title={`Failed: ${data.failed}`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Uploads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Processed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Failed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Quality Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Audio Quality Distribution</h3>
          <div className="space-y-4">
            {audioQualityMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${metric.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{metric.quality}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${metric.color}`}
                      style={{ width: `${metric.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{metric.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Trends and Processing Times */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Weekly Sentiment & Tone Trends */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Weekly Sentiment & Tone Trends</h3>
          <div className="h-48">
            <div className="flex items-end justify-between h-40 px-2">
              {weeklyTrends.map((day, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <div 
                      className="w-3 bg-purple-500 rounded-t"
                      style={{ height: `${(day.sentiment / 10) * 120}px` }}
                      title={`Sentiment: ${day.sentiment}`}
                    ></div>
                    <div 
                      className="w-3 bg-indigo-500 rounded-t"
                      style={{ height: `${(day.tone / 10) * 120}px` }}
                      title={`Tone: ${day.tone}`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{day.day}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-sm text-gray-600">Sentiment Score</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                <span className="text-sm text-gray-600">Tone Score</span>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Time Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Processing Time Distribution</h3>
          <div className="space-y-4">
            {processingTimes.map((time, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{time.timeRange}</span>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      style={{ width: `${time.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{time.count}</span>
                  <span className="text-xs text-gray-500 w-8 text-right">{time.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performers and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Performers */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Top Performers This Month</h3>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                    <p className="text-xs text-gray-500">{performer.uploads} uploads</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{performer.successRate}%</p>
                  <p className="text-xs text-gray-500">{performer.avgDuration} avg</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  activity.type === 'upload' ? 'bg-blue-500' :
                  activity.type === 'analysis' ? 'bg-green-500' :
                  activity.type === 'processing' ? 'bg-yellow-500' :
                  activity.type === 'error' ? 'bg-red-500' :
                  activity.type === 'user' ? 'bg-purple-500' :
                  activity.type === 'report' ? 'bg-indigo-500' : 'bg-gray-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-xs text-gray-500">{activity.user}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'success' ? 'bg-green-100 text-green-800' :
                  activity.status === 'failed' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health Status */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-6">System Health & Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Server Status</h4>
            <p className="text-sm text-green-600">All systems operational</p>
            <p className="text-xs text-gray-500 mt-1">99.9% uptime</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Processing Speed</h4>
            <p className="text-sm text-blue-600">2.3 min average</p>
            <p className="text-xs text-gray-500 mt-1">15% faster than last month</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Quality Score</h4>
            <p className="text-sm text-purple-600">8.7/10 average</p>
            <p className="text-xs text-gray-500 mt-1">Based on 1,247 recordings</p>
          </div>
        </div>
      </div>
    </div>
  );
};