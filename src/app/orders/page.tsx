'use client'

import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useOrders, Order } from '@/app/context/OrderContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { ShoppingBag, ArrowLeft, ChevronDown, ChevronUp, Package } from 'lucide-react';

export default function OrdersPage() {
  const { isLoggedIn, user } = useAuth();
  const { orders } = useOrders();
  const router = useRouter();
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />

        <div className="flex-grow flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-md">
            <ShoppingBag className="w-20 h-20 md:w-24 md:h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
              Login Required
            </h1>
            <p className="text-gray-600 mb-8">
              Please log in to view your orders.
            </p>
            <button
              onClick={() => router.push('/account')}
              className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold"
            >
              Go to Login
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const statusColor = (status: Order["status"]) => {
    switch (status) {
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-40 md:h-64 bg-[#6D4C41] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">My Orders</h1>
      </div>

      {/* Orders Content */}
      <section className="flex-grow py-8 md:py-12 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Welcome */}
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[#6D4C41] hover:text-black transition mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Welcome, {user?.name}!
            </h2>
            <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
          </div>

          {orders.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
              <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                No Orders Yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                You haven&apos;t placed any orders yet. Start shopping for premium dry fruits!
              </p>
              <button
                onClick={() => router.push('/collections/nuts-dryfruits')}
                className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg overflow-hidden">
                  {/* Order Header */}
                  <button
                    onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                    className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 md:p-5 bg-gray-50 hover:bg-gray-100 transition text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-[#6D4C41] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm md:text-base">{order.id}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(order.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className="font-bold text-gray-800">₹{order.total.toFixed(2)}</span>
                      {expandedOrder === order.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Order Details */}
                  {expandedOrder === order.id && (
                    <div className="p-4 md:p-5 border-t">
                      {/* Items */}
                      <h4 className="font-medium text-gray-800 mb-3">Items</h4>
                      <div className="space-y-3 mb-4">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex gap-3 items-center">
                            <Image src={item.img} alt={item.name} width={48} height={48} className="w-12 h-12 object-cover rounded" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.weight} x {item.quantity}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>

                      {/* Address & Payment */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 text-sm">Shipping Address</h4>
                          <p className="text-gray-600 text-sm">
                            {order.shippingAddress.name}<br />
                            {order.shippingAddress.address}<br />
                            {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}<br />
                            Phone: {order.shippingAddress.phone}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 text-sm">Payment</h4>
                          <p className="text-gray-600 text-sm">{order.paymentMethod}</p>
                          <p className="text-gray-600 text-sm mt-1">
                            Total: <span className="font-bold text-[#6D4C41]">₹{order.total.toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
