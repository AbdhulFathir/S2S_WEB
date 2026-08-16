import {
  Users,
  FileText,
  ClipboardList,
  QrCode,
  BarChart3,
  Bell,
  Home,
  BookOpen,
  ScanLine,
  User,
} from 'lucide-react'

function TutorDashboardScreen() {
  const tiles = [
    { icon: Users, label: 'Students', color: 'bg-blue-500/15 text-blue-600' },
    { icon: FileText, label: 'Materials', color: 'bg-emerald-500/15 text-emerald-600' },
    { icon: ClipboardList, label: 'Tests', color: 'bg-violet-500/15 text-violet-600' },
    { icon: QrCode, label: 'QR Code', color: 'bg-orange-500/15 text-orange-600' },
    { icon: BarChart3, label: 'Progress', color: 'bg-cyan-500/15 text-cyan-600' },
    { icon: Bell, label: 'Announce', color: 'bg-rose-500/15 text-rose-600' },
  ]

  return (
    <div className="flex h-full flex-col bg-surface text-[10px]">
      <div className="gradient-primary px-3 pb-4 pt-8">
        <p className="text-[9px] font-medium text-white/70">Good morning,</p>
        <p className="text-sm font-bold text-white">Mr. Perera</p>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 rounded-lg bg-white/15 px-2 py-1.5 backdrop-blur-sm">
            <p className="text-[8px] text-white/70">Students</p>
            <p className="text-xs font-bold text-white">48</p>
          </div>
          <div className="flex-1 rounded-lg bg-white/15 px-2 py-1.5 backdrop-blur-sm">
            <p className="text-[8px] text-white/70">Classes</p>
            <p className="text-xs font-bold text-white">6</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-3">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-text-secondary">
          Dashboard
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className="flex flex-col items-center rounded-xl bg-white p-2 shadow-sm"
            >
              <div
                className={`mb-1 flex h-7 w-7 items-center justify-center rounded-lg ${tile.color}`}
              >
                <tile.icon size={14} />
              </div>
              <span className="text-[8px] font-semibold text-text-primary">{tile.label}</span>
            </div>
          ))}
        </div>

        <p className="mb-2 mt-3 text-[9px] font-bold uppercase tracking-wider text-text-secondary">
          Learning Progress
        </p>
        <div className="flex justify-around rounded-xl bg-white p-3 shadow-sm">
          {[
            { value: '70%', label: 'Progress' },
            { value: '30%', label: 'Complete' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E5EA" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#1565E8"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${parseInt(stat.value) * 2.64} 264`}
                  />
                </svg>
                <span className="text-[9px] font-extrabold text-primary">{stat.value}</span>
              </div>
              <span className="mt-1 text-[7px] font-medium text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StudentHomeScreen() {
  const courses = [
    { name: 'Physics — Grade 12', progress: 75, color: 'bg-primary' },
    { name: 'Chemistry — O/L', progress: 45, color: 'bg-success' },
  ]

  return (
    <div className="flex h-full flex-col bg-surface text-[10px]">
      <div className="gradient-primary px-3 pb-3 pt-8">
        <p className="text-[9px] font-medium text-white/70">Welcome back,</p>
        <p className="text-sm font-bold text-white">Sarah Fernando</p>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-success/20 px-2 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span className="text-[8px] font-semibold text-success">Access Valid</span>
        </div>
      </div>

      <div className="flex-1 p-3 pb-14">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-text-secondary">
          My Courses
        </p>
        {courses.map((course) => (
          <div key={course.name} className="mb-2 rounded-xl bg-white p-2.5 shadow-sm">
            <p className="text-[9px] font-bold text-text-primary">{course.name}</p>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
              <div
                className={`h-full rounded-full ${course.color}`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="mt-1 text-[7px] text-text-secondary">{course.progress}% complete</p>
          </div>
        ))}

        <div className="mt-2 rounded-xl border border-primary/20 bg-primary/5 p-2.5">
          <p className="text-[9px] font-bold text-primary">Upcoming Test</p>
          <p className="mt-0.5 text-[8px] text-text-secondary">Physics — Unit 5 · Tomorrow</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around border-t border-border bg-white px-2 py-1.5">
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: BookOpen, label: 'Material', active: false },
          { icon: ScanLine, label: 'QR', active: false, center: true },
          { icon: ClipboardList, label: 'Test', active: false },
          { icon: User, label: 'Profile', active: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center ${item.center ? '-mt-3' : ''}`}
          >
            {item.center ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-button">
                <item.icon size={14} />
              </div>
            ) : (
              <item.icon
                size={14}
                className={item.active ? 'text-primary' : 'text-text-secondary'}
              />
            )}
            <span
              className={`text-[6px] ${item.active ? 'font-bold text-primary' : 'text-text-secondary'}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AppScreenPreview({ variant = 'tutor' }) {
  return variant === 'student' ? <StudentHomeScreen /> : <TutorDashboardScreen />
}

export function PhoneMockup({ variant = 'tutor', label, className = '', src, alt }) {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-primary shadow-md">
          {label}
        </span>
      )}
      <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[280px]">
        <div className="rounded-[2.5rem] border-[6px] border-gray-900 bg-gray-900 p-2 shadow-2xl shadow-black/40">
          <div className="relative overflow-hidden rounded-[2rem] bg-surface">
            <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
            <div className="relative aspect-[9/19.5] w-full">
              {src ? (
                <img src={src} alt={alt || label} className="h-full w-full object-cover object-top" />
              ) : (
                <AppScreenPreview variant={variant} />
              )}
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 -z-10 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </div>
  )
}
