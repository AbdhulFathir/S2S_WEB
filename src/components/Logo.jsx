import mainLogo from '../assets/main_logo.png'

export function Logo({ variant = 'dark', showTagline = true, size = 'md' }) {
  const textColor = variant === 'light' ? 'text-text-on-dark' : 'text-text-primary'
  const taglineColor =
    variant === 'light' ? 'text-text-muted-dark' : 'text-text-secondary'

  const imgSize = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'

  return (
    <div className="flex items-center gap-3">
      <img
        src={mainLogo}
        alt="Scribble 2 Scrabble logo"
        className={`${imgSize} shrink-0 rounded-xl object-contain`}
        style={variant === 'light' ? { filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' } : {}}
      />
      <div>
        <p className={`${textSize} font-extrabold leading-tight tracking-tight ${textColor}`}>
          Scribble <span className="text-primary">2</span> Scrabble
        </p>
        {showTagline && (
          <p className={`text-xs font-medium ${taglineColor}`}>Where Mess Becomes Mastery</p>
        )}
      </div>
    </div>
  )
}
