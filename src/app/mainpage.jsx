import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>

          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
              <Link to="/item" className='thumb-link'><img src="images/thumbs/diagonal-building.jpg" alt="building" /></Link>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">Photography</a>
                  </span>
                </div>

                <h1 className="entry-title">
                  <Link to="/item">Just a Standard Format Post.</Link>
                </h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                incididunt mollit id et sit proident dolor nulla sed commodo est
                ad minim elit reprehenderit nisi officia aute incididunt velit
                sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/ferris-wheel.jpg" alt="ferris wheel" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">UI</a>
                  </span>
                </div>

                <h1 className="entry-title">
                  <a href="single-standard.html">
                    This Is Another Standard Format Post.
                  </a>
                </h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                incididunt mollit id et sit proident dolor nulla sed commodo est
                ad minim elit reprehenderit nisi officia aute incididunt velit
                sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          <article className="brick entry format-quote animate-this">
            <div className="entry-thumb">
              <blockquote>
                <p>
                  Good design is making something intelligible and memorable.
                  Great design is making something memorable and meaningful.
                </p>

                <cite>Dieter Rams</cite>
              </blockquote>
            </div>
          </article>

          <article className="brick entry animate-this">
            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/shutterbug.jpg" alt="Shutterbug" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Photography</a>
                    <a href="#">html</a>
                  </span>
                </div>

                <h1 className="entry-title">
                  <a href="single-standard.html">
                    Photography Skills Can Improve Your Graphic Design.
                  </a>
                </h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                incididunt mollit id et sit proident dolor nulla sed commodo est
                ad minim elit reprehenderit nisi officia aute incididunt velit
                sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="row">
        <nav className="pagination">
          <span className="page-numbers prev inactive">Prev</span>
          <span className="page-numbers current">1</span>
          <a href="#" className="page-numbers">
            2
          </a>
          <a href="#" className="page-numbers">
            3
          </a>
          <a href="#" className="page-numbers">
            4
          </a>
          <a href="#" className="page-numbers">
            5
          </a>
          <a href="#" className="page-numbers next">
            Next
          </a>
        </nav>
      </div>
    </div>
  )
}

export default MainPage