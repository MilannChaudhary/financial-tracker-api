import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const TransactionCollection = mongoose.model("Transaction", transactionSchema);

export const insertTransaction = (transactionObj) => TransactionCollection(transactionObj).save();

export const getTransactions = () => TransactionCollection.find();

export const updateTransaction = (_id, rest) => TransactionCollection.findByIdAndUpdate(_id, rest, { new: true });

export const deleteTransaction = (_id) => TransactionCollection.findByIdAndDelete(_id);
