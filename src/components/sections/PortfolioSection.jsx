import { AnimatePresence, motion } from 'framer-motion'

function PortfolioSection({
  portfolioFilters,
  portfolioFilter,
  onFilterChange,
  visiblePortfolio,
  portfolioPage,
  portfolioTotalPages,
  onPortfolioPageChange,
}) {
  const pages = Array.from({ length: portfolioTotalPages }, (_, index) => index + 1)

  return (
    <>
      <div className="filters">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={portfolioFilter === filter ? 'active' : ''}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${portfolioFilter}-${portfolioPage}`}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {visiblePortfolio.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.image}`}
              className="portfolio-item"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.28, ease: 'easeOut', delay: index * 0.03 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="portfolio-caption">
                <p>{item.title}</p>
              </div>
              <div className="overlay">
                <div className="overlay-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="pager">
        <button
          type="button"
          onClick={() => onPortfolioPageChange(Math.max(1, portfolioPage - 1))}
          disabled={portfolioPage === 1}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={portfolioPage === page ? 'active' : ''}
            onClick={() => onPortfolioPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPortfolioPageChange(Math.min(portfolioTotalPages, portfolioPage + 1))}
          disabled={portfolioPage === portfolioTotalPages}
        >
          →
        </button>
      </div>
    </>
  )
}

export default PortfolioSection
