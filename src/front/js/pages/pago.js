import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Pago = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center">Formulario de pago</h1>

      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Consulta con tu especialista</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Nombre del producto</h6>
                <small className="text-muted">Breve descripción</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Formulario de pago */}
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mb-3">
        <label for="formFile" className="form-label">
          Default file input example
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>

      <hr class="mb-4" />
      <h4 class="mb-3">Payment</h4>
      <div class="d-block my-3">
        <div class="custom-control custom-radio">
          <input
            id="credit"
            name="paymentMethod"
            type="radio"
            class="custom-control-input"
            checked=""
            required=""
          />
          <label class="custom-control-label" for="credit">
            Credit card
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input
            id="debit"
            name="paymentMethod"
            type="radio"
            class="custom-control-input"
            required=""
          />
          <label class="custom-control-label" for="debit">
            Tarjeta de credito
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input
            id="paypal"
            name="paymentMethod"
            type="radio"
            class="custom-control-input"
            required=""
          />
          <label class="custom-control-label" for="paypal">
            PayPal
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cc-name">Name on card</label>
          <input
            type="text"
            class="form-control"
            id="cc-name"
            placeholder=""
            required=""
          />
          <small class="text-muted">Full name as displayed on card</small>
          <div class="invalid-feedback"> Name on card is required </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="cc-number">Credit card number</label>
          <input
            type="text"
            class="form-control"
            id="cc-number"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback"> Credit card number is required </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-3">
          <label for="cc-expiration">Expiration</label>
          <input
            type="text"
            class="form-control"
            id="cc-expiration"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback"> Expiration date required </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="cc-cvv">CVV</label>
          <input
            type="text"
            class="form-control"
            id="cc-cvv"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback"> Security code required </div>
        </div>
      </div>
      <hr class="mb-4" />
      <button class="btn btn-primary btn-lg btn-block" type="submit">
        Continue to checkout
      </button>
    </>
  );
};
