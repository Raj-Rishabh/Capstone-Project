import React from "react";

function Grid() {
  return (
    <div>
      <div>
        <hr className="l" />
      </div>
      <div className="flex-container" id="grid">
        <div class="card card-img" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title text-light">
              Derwent Charcoal Pencils Combo
            </h5>
            <p class="card-text"></p>
            <a href="#f" class="btn btn-dark crt">
              Add to Cart
            </a>
          </div>
        </div>
        <div class="card card-img1" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title text-light">
              Winsor & Newton Sketch & Write Note{" "}
            </h5>
            <p class="card-text"></p>
            <a href="#f" class="btn btn-dark crt">
              Add to Cart
            </a>
          </div>
        </div>
        <div class="card card-img2" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title text-light">Canson CA Grain Drawing Paper</h5>
            <p class="card-text"></p>
            <a href="#f" class="btn btn-dark crt">
              Add to Cart
            </a>
          </div>
        </div>
        <div class="card card-img3" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title text-light">
              Full & Half Mask Paper Mache with Elastic
            </h5>
            <p class="card-text"></p>
            <a href="#f" class="btn btn-dark crt">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

export default Grid;
