import React from 'react';

function Specs(props) {
  return (
    <div className="specs-img col-sm m-auto pt-5">
      <div className="container vh-100 pt-5">
        <div className="row">
          <div className="left col-sm col-md-4">
            <div className="spec-details text-muted">
              <span className="spec">16-inch Retina display</span>
              <br />
            for an immersive viewing experience.
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Up to 8TB SSD storage</span>
              <br />
            — the highest capacity in any notebook.
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">AMD Radeon Pro 5000M series graphics</span>
              <br />
            for fast rendering and seamless playback.
            </div>
          </div>
          <div className="center col-sm col-md-4"></div>
          <div className="right col-sm col-md-4">
            <div className="spec-details text-muted">
              <span className="spec">Up to 8-core processor</span>
              <br />
            to power through intensive workloads.
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Up to 64GB of memory</span>
              <br />
            for editing large files and smooth multitasking.
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Six-speaker sound system and studio-quality mics</span>
              <br />
            for dramatic sound and superclean recordings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;
