const variants = {
  primary:
    'bg-primary text-white hover:bg-[#1256c9] shadow-button hover:-translate-y-0.5 hover:shadow-lg',
  secondary:
    'bg-white text-primary border-2 border-white/30 hover:bg-white/90 hover:-translate-y-0.5',
  ghost:
    'border-2 border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5',
  white: 'bg-white text-primary hover:bg-surface shadow-lg hover:-translate-y-0.5',
}

export function Button({
  children,
  href = '#contact',
  variant = 'primary',
  className = '',
  onClick,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
