import express from "express";
import {
  insertTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "../models/TransactionSchema.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const result = await insertTransaction(req.body);
    res.status(201).json({ status: "success", message: "Transaction added", result });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const transaction = await getTransactions();
    res.status(200).json({ status: "success", transaction });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.patch("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const updated = await updateTransaction(_id, rest);
    res.status(200).json({ status: "success", message: "Transaction updated", updated });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await deleteTransaction(_id);
    res.status(200).json({ status: "success", message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
