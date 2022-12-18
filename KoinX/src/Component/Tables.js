import React, { useState } from "react";

function Tables({ pd }) {
  console.log("🚀 ~ file: Tables.js:4 ~ Tables ~ pd", pd);
  let count = 1;
  return (
    <div>
      <h1 className="text-2xl m-4 font-inter font-bold">
        Top 100 Cryptocurrencies by Market Cap
      </h1>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4 text-center">
                #
              </th>
              <th scope="col" class="p-4 ">
                NAME
              </th>
              <th scope="col" class="p-4">
                PRICE
              </th>
              <th scope="col" class="p-4">
                24H
              </th>
              <th scope="col" class="p-4">
                7D
              </th>
              <th scope="col" class="p-4">
                MARKET CAP
              </th>{" "}
              <th scope="col" class="p-4">
                VOLUME(24H)
              </th>
              <th scope="col" class="p-2">
                CIRCULATING SUPPLY
              </th>
            </tr>
          </thead>

          {pd.map((pd) => {
            return (
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="p-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {count++}
                  </th>
                  <th
                    scope="row"
                    class="p-4 flex justify-start items-start font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-6 w-6 mr-2 "
                      src={pd.image}
                      alt="cryptos"
                    />
                    {pd.name}
                  </th>
                  <td class="p-2">{pd.current_price}</td>
                  <td class="p-2">
                    {pd.price_change_percentage_24h_in_currency}%
                  </td>
                  <td class="p-2">
                    {pd.price_change_percentage_7d_in_currency}%
                  </td>
                  <td class="p-2">{pd.market_cap}</td>{" "}
                  <td class="p-2">{pd.total_volume}</td>
                  <td class="p-2">{pd.circulating_supply}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Tables;