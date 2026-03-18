"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";
import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-40 md:h-64 bg-[#6D4C41] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Shopping Cart</h1>
      </div>

      <section className="flex-grow py-8 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8">Browse our collection and add your favorite dry fruits!</p>
              <Link
                href="/collections/nuts-dryfruits"
                className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-4 py-3 text-gray-700">Product</th>
                      <th className="px-4 py-3 text-gray-700">Weight</th>
                      <th className="px-4 py-3 text-gray-700">Price</th>
                      <th className="px-4 py-3 text-gray-700">Quantity</th>
                      <th className="px-4 py-3 text-gray-700">Total</th>
                      <th className="px-4 py-3 text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={`${item.id}-${item.category}-${item.weight}`} className="border-b">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <span className="font-medium text-gray-800">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">{item.weight}</td>
                        <td className="px-4 py-4 text-gray-800">₹{item.price.toFixed(2)}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.category, item.weight, item.quantity - 1)}
                              className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-gray-800">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.category, item.weight, item.quantity + 1)}
                              className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 font-semibold text-gray-800">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => removeFromCart(item.id, item.category, item.weight)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.category}-${item.weight}`} className="border rounded-lg p-4 shadow-sm">
                    <div className="flex gap-4">
                      <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                        <p className="text-gray-500 text-xs mt-1">{item.weight}</p>
                        <p className="text-[#6D4C41] font-semibold mt-1">₹{item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.category, item.weight)}
                        className="text-red-500 hover:text-red-700 self-start"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.category, item.weight, item.quantity - 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-gray-800 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.category, item.weight, item.quantity + 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-semibold text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t pt-6">
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 font-medium text-sm"
                >
                  Clear Cart
                </button>

                <div className="w-full md:w-auto bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between gap-12 mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-800">₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between gap-12 mb-4">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-gray-800">{cartTotal >= 500 ? "Free" : "₹50.00"}</span>
                  </div>
                  <div className="flex justify-between gap-12 border-t pt-2 mb-4">
                    <span className="font-bold text-gray-800 text-lg">Total:</span>
                    <span className="font-bold text-[#6D4C41] text-lg">
                      ₹{(cartTotal + (cartTotal >= 500 ? 0 : 50)).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => router.push("/checkout")}
                    className="w-full bg-[#1B5E20] text-white py-3 rounded-lg hover:bg-green-900 transition font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
