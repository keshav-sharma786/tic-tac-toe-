import tkinter as tk
from tkinter import messagebox
from tkinter import ttk

# Initialize main window
root = tk.Tk()
root.title("Budget Planner")
root.geometry("400x500")
root.configure(bg="#f0f8ff")  # Light blue background

# Variables
income_var = tk.DoubleVar()
expense_name_var = tk.StringVar()
expense_amount_var = tk.DoubleVar()
expenses = []

# Styles
style = ttk.Style()
style.configure("TLabel", font=("Helvetica", 10), background="#f0f8ff")
style.configure("TButton", font=("Helvetica", 10, "bold"), foreground="#2f4f4f")
style.configure("TEntry", font=("Helvetica", 10))

# Functions
def add_expense():
    name = expense_name_var.get()
    amount = expense_amount_var.get()
    if name and amount > 0:
        expenses.append((name, amount))
        expense_name_var.set("")
        expense_amount_var.set(0)
        update_expenses()
    else:
        messagebox.showwarning("Input Error", "Please enter valid expense details.")

def update_expenses():
    total_expenses = sum(amount for _, amount in expenses)
    total_income = income_var.get()
    remaining_balance = total_income - total_expenses

    expense_text = "\n".join([f"{name}: ${amount:.2f}" for name, amount in expenses])
    expenses_label.config(text=expense_text)
    total_income_label.config(text=f"Total Income: ${total_income:.2f}")
    total_expense_label.config(text=f"Total Expenses: ${total_expenses:.2f}")
    balance_label.config(text=f"Remaining Balance: ${remaining_balance:.2f}")

def reset():
    income_var.set(0)
    expenses.clear()
    expense_name_var.set("")
    expense_amount_var.set(0)
    update_expenses()

# GUI Layout
header_label = ttk.Label(root, text="Budget Planner", font=("Helvetica", 16, "bold"), background="#4682b4", foreground="white")
header_label.pack(pady=10, fill="x")

frame = ttk.Frame(root)
frame.pack(pady=10, padx=10, fill="x")

# Income input
income_label = ttk.Label(frame, text="Total Income:")
income_label.grid(row=0, column=0, sticky="w", pady=5)
income_entry = ttk.Entry(frame, textvariable=income_var, width=20)
income_entry.grid(row=0, column=1, pady=5)

# Expense input
expense_name_label = ttk.Label(frame, text="Expense Name:")
expense_name_label.grid(row=1, column=0, sticky="w", pady=5)
expense_name_entry = ttk.Entry(frame, textvariable=expense_name_var, width=20)
expense_name_entry.grid(row=1, column=1, pady=5)

expense_amount_label = ttk.Label(frame, text="Expense Amount:")
expense_amount_label.grid(row=2, column=0, sticky="w", pady=5)
expense_amount_entry = ttk.Entry(frame, textvariable=expense_amount_var, width=20)
expense_amount_entry.grid(row=2, column=1, pady=5)

# Add expense button
add_expense_button = ttk.Button(root, text="Add Expense", command=add_expense)
add_expense_button.pack(pady=10)

# Display expenses and balance
expenses_frame = ttk.Frame(root)
expenses_frame.pack(pady=10, padx=10, fill="x")

expenses_label = ttk.Label(expenses_frame, text="No expenses added yet", font=("Helvetica", 10), background="#f0f8ff", justify="left")
expenses_label.pack(anchor="w")

total_income_label = ttk.Label(expenses_frame, text="Total Income: $0.00", font=("Helvetica", 10, "bold"), background="#f0f8ff")
total_income_label.pack(anchor="w", pady=5)

total_expense_label = ttk.Label(expenses_frame, text="Total Expenses: $0.00", font=("Helvetica", 10, "bold"), background="#f0f8ff")
total_expense_label.pack(anchor="w", pady=5)

balance_label = ttk.Label(expenses_frame, text="Remaining Balance: $0.00", font=("Helvetica", 10, "bold"), background="#f0f8ff")
balance_label.pack(anchor="w", pady=5)

# Reset button
reset_button = ttk.Button(root, text="Reset", command=reset)
reset_button.pack(pady=10)

# Run the application
root.mainloop()
