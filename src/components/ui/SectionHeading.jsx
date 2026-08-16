export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    if (parts.length === 1) return title
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 lg:mb-16`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight ${
          dark ? 'text-text-on-dark' : 'text-text-primary'
        }`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-text-muted-dark' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
