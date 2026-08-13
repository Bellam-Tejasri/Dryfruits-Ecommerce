// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import Header from "@/app/components/Header";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";
// import { useCart } from "@/app/context/CartContext";
// import { useOrders } from "@/app/context/OrderContext";
// import { useAuth } from "@/app/context/AuthContext";
// import { ShoppingCart, CreditCard, Banknote, Smartphone, CheckCircle } from "lucide-react";

// export default function CheckoutPage() {
//   const { cart, cartTotal, clearCart } = useCart();
//   const { placeOrder } = useOrders();
//   const { isLoggedIn } = useAuth();
//   const router = useRouter();

//   const [step, setStep] = useState<"address" | "payment" | "success">("address");
//   const [orderId, setOrderId] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const shipping = cartTotal >= 500 ? 0 : 50;
//   const total = cartTotal + shipping;

//   const handleAddressSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStep("payment");
//   };

//   const handlePlaceOrder = () => {
//     const id = placeOrder({
//       items: [...cart],
//       total,
//       paymentMethod:
//         paymentMethod === "cod"
//           ? "Cash on Delivery"
//           : paymentMethod === "upi"
//           ? "UPI Payment"
//           : "Card Payment",
//       shippingAddress: address,
//     });
//     setOrderId(id);
//     clearCart();
//     setStep("success");
//   };

//   if (cart.length === 0 && step !== "success") {
//     return (
//       <div className="min-h-screen flex flex-col bg-white">
//         <Header />
//         <Navbar />
//         <div className="flex-grow flex items-center justify-center px-4 py-20">
//           <div className="text-center">
//             <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Cart is Empty</h2>
//             <p className="text-gray-600 mb-8">Add some products before checking out.</p>
//             <Link
//               href="/collections/nuts-dryfruits"
//               className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />
//       <Navbar />

//       {/* Banner */}
//       <div className="relative w-full h-32 md:h-48 bg-[#6D4C41] flex items-center justify-center">
//         <h1 className="text-white text-2xl md:text-4xl font-bold">Checkout</h1>
//       </div>

//       <section className="flex-grow py-8 px-4 md:px-10">
//         <div className="max-w-5xl mx-auto">

//           {/* Steps Indicator */}
//           {step !== "success" && (
//             <div className="flex items-center justify-center gap-4 mb-10">
//               <div className={`flex items-center gap-2 ${step === "address" ? "text-[#6D4C41] font-bold" : "text-gray-400"}`}>
//                 <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step === "address" ? "bg-[#6D4C41] text-white" : "bg-gray-200 text-gray-500"}`}>1</span>
//                 <span className="hidden sm:inline">Address</span>
//               </div>
//               <div className="w-8 md:w-16 h-px bg-gray-300"></div>
//               <div className={`flex items-center gap-2 ${step === "payment" ? "text-[#6D4C41] font-bold" : "text-gray-400"}`}>
//                 <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step === "payment" ? "bg-[#6D4C41] text-white" : "bg-gray-200 text-gray-500"}`}>2</span>
//                 <span className="hidden sm:inline">Payment</span>
//               </div>
//             </div>
//           )}

//           {step === "success" ? (
//             <div className="text-center py-16">
//               <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Order Placed Successfully!</h2>
//               <p className="text-gray-600 mb-2">Your order ID is: <span className="font-bold text-[#6D4C41]">{orderId}</span></p>
//               <p className="text-gray-500 mb-8">You will receive a confirmation shortly.</p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={() => router.push("/orders")}
//                   className="px-6 py-3 bg-[#6D4C41] text-white rounded-lg hover:bg-black transition font-semibold"
//                 >
//                   View My Orders
//                 </button>
//                 <button
//                   onClick={() => router.push("/")}
//                   className="px-6 py-3 border border-[#6D4C41] text-[#6D4C41] rounded-lg hover:bg-gray-50 transition font-semibold"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Left: Form */}
//               <div className="lg:col-span-2">
//                 {step === "address" && (
//                   <form onSubmit={handleAddressSubmit} className="space-y-4">
//                     <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>

//                     {!isLoggedIn && (
//                       <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//                         <p className="text-yellow-800 text-sm">
//                           <Link href="/account" className="underline font-semibold">Login</Link> to track your orders easily.
//                         </p>
//                       </div>
//                     )}

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                         <input
//                           required
//                           type="text"
//                           value={address.name}
//                           onChange={(e) => setAddress({ ...address, name: e.target.value })}
//                           className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                           placeholder="Enter your full name"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                         <input
//                           required
//                           type="tel"
//                           pattern="[0-9]{10}"
//                           value={address.phone}
//                           onChange={(e) => setAddress({ ...address, phone: e.target.value })}
//                           className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                           placeholder="10-digit phone number"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
//                       <textarea
//                         required
//                         value={address.address}
//                         onChange={(e) => setAddress({ ...address, address: e.target.value })}
//                         rows={3}
//                         className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                         placeholder="House no, Street, Landmark"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
//                         <input
//                           required
//                           type="text"
//                           value={address.city}
//                           onChange={(e) => setAddress({ ...address, city: e.target.value })}
//                           className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                           placeholder="City"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
//                         <input
//                           required
//                           type="text"
//                           value={address.state}
//                           onChange={(e) => setAddress({ ...address, state: e.target.value })}
//                           className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                           placeholder="State"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
//                         <input
//                           required
//                           type="text"
//                           pattern="[0-9]{6}"
//                           value={address.pincode}
//                           onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
//                           className="w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-[#6D4C41] focus:border-transparent outline-none"
//                           placeholder="6-digit pincode"
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full sm:w-auto bg-[#6D4C41] text-white px-8 py-3 rounded-lg hover:bg-black transition font-semibold mt-4"
//                     >
//                       Continue to Payment
//                     </button>
//                   </form>
//                 )}

//                 {step === "payment" && (
//                   <div>
//                     <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>

//                     <div className="space-y-3 mb-6">
//                       <label
//                         className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition ${paymentMethod === "cod" ? "border-[#6D4C41] bg-orange-50" : "border-gray-200 hover:border-gray-400"}`}
//                       >
//                         <input
//                           type="radio"
//                           name="payment"
//                           value="cod"
//                           checked={paymentMethod === "cod"}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="accent-[#6D4C41]"
//                         />
//                         <Banknote className="w-6 h-6 text-[#6D4C41]" />
//                         <div>
//                           <p className="font-medium text-gray-800">Cash on Delivery</p>
//                           <p className="text-sm text-gray-500">Pay when your order is delivered</p>
//                         </div>
//                       </label>

//                       <label
//                         className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition ${paymentMethod === "upi" ? "border-[#6D4C41] bg-orange-50" : "border-gray-200 hover:border-gray-400"}`}
//                       >
//                         <input
//                           type="radio"
//                           name="payment"
//                           value="upi"
//                           checked={paymentMethod === "upi"}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="accent-[#6D4C41]"
//                         />
//                         <Smartphone className="w-6 h-6 text-[#6D4C41]" />
//                         <div>
//                           <p className="font-medium text-gray-800">UPI Payment</p>
//                           <p className="text-sm text-gray-500">Pay using Google Pay, PhonePe, or any UPI app</p>
//                         </div>
//                       </label>

//                       <label
//                         className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition ${paymentMethod === "card" ? "border-[#6D4C41] bg-orange-50" : "border-gray-200 hover:border-gray-400"}`}
//                       >
//                         <input
//                           type="radio"
//                           name="payment"
//                           value="card"
//                           checked={paymentMethod === "card"}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="accent-[#6D4C41]"
//                         />
//                         <CreditCard className="w-6 h-6 text-[#6D4C41]" />
//                         <div>
//                           <p className="font-medium text-gray-800">Credit / Debit Card</p>
//                           <p className="text-sm text-gray-500">Pay securely with your card</p>
//                         </div>
//                       </label>
//                     </div>

//                     {/* Shipping summary */}
//                     <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                       <h3 className="font-medium text-gray-800 mb-2">Delivering to:</h3>
//                       <p className="text-gray-600 text-sm">
//                         {address.name}, {address.phone}<br />
//                         {address.address}<br />
//                         {address.city}, {address.state} - {address.pincode}
//                       </p>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <button
//                         onClick={() => setStep("address")}
//                         className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
//                       >
//                         Back
//                       </button>
//                       <button
//                         onClick={handlePlaceOrder}
//                         className="px-8 py-3 bg-[#1B5E20] text-white rounded-lg hover:bg-green-900 transition font-semibold"
//                       >
//                         Place Order - ₹{total.toFixed(2)}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Right: Order Summary */}
//               <div className="lg:col-span-1">
//                 <div className="bg-gray-50 rounded-lg p-5 sticky top-24">
//                   <h3 className="font-bold text-gray-800 mb-4 text-lg">Order Summary</h3>

//                   <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
//                     {cart.map((item) => (
//                       <div key={`${item.id}-${item.category}-${item.weight}`} className="flex gap-3">
//                         <Image src={item.img} alt={item.name} width={48} height={48} className="w-12 h-12 object-cover rounded" />
//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
//                           <p className="text-xs text-gray-500">{item.weight} x {item.quantity}</p>
//                         </div>
//                         <p className="text-sm font-medium text-gray-800 whitespace-nowrap">₹{(item.price * item.quantity).toFixed(2)}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="border-t pt-3 space-y-2">
//                     <div className="flex justify-between text-sm text-gray-600">
//                       <span>Subtotal</span>
//                       <span>₹{cartTotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm text-gray-600">
//                       <span>Shipping</span>
//                       <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-gray-800 text-lg border-t pt-2">
//                       <span>Total</span>
//                       <span className="text-[#6D4C41]">₹{total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   {cartTotal < 500 && (
//                     <p className="text-xs text-green-700 mt-3 bg-green-50 p-2 rounded">
//                       Add ₹{(500 - cartTotal).toFixed(2)} more for free shipping!
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
