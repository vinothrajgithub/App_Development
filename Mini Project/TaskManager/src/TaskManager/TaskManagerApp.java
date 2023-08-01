package TaskManager;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;

public class TaskManagerApp {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
    private static final String MENU = "Task Manager\n" +
            "1. View Tasks\n" +
            "2. Add Task\n" +
            "3. Update Task\n" +
            "4. Delete Task\n" +
            "5. Mark Task as Completed\n" +
            "6. Exit";

    private final Connection connection;

    public TaskManagerApp(Connection connection) {
        this.connection = connection;
    }

    public void run() {
        try {
            createTaskTableIfNotExists();
            Scanner scanner = new Scanner(System.in);
            int choice;

            do {
                System.out.println(MENU);
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();
                scanner.nextLine();

                switch (choice) {
                    case 1:
                        viewTasks();
                        break;
                    case 2:
                        addTask(scanner);
                        break;
                    case 3:
                        updateTask(scanner);
                        break;
                    case 4:
                        deleteTask(scanner);
                        break;
                    case 5:
                        markTaskAsCompleted(scanner);
                        break;
                    case 6:
                        System.out.println("Exiting Task Manager...");
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 6);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void createTaskTableIfNotExists() throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS tasks (" +
                "id INT PRIMARY KEY AUTO_INCREMENT," +
                "title VARCHAR(255) NOT NULL," +
                "due_date DATE," +
                "is_completed BOOLEAN NOT NULL DEFAULT false" +
                ")";
        try (Statement stmt = connection.createStatement()) {
            stmt.executeUpdate(sql);
        }
    }

    private void viewTasks() throws SQLException {
        String sql = "SELECT * FROM tasks";
        try (Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                int id = rs.getInt("id");
                String title = rs.getString("title");
                Date dueDate = rs.getDate("due_date");
                boolean isCompleted = rs.getBoolean("is_completed");

                System.out.println("Task ID: " + id);
                System.out.println("Title: " + title);
                System.out.println("Due Date: " + (dueDate != null ? DATE_FORMAT.format(dueDate) : "N/A"));
                System.out.println("Status: " + (isCompleted ? "Completed" : "Pending"));
                System.out.println();
            }
        }
    }

    private void addTask(Scanner scanner) throws SQLException {
        System.out.print("Enter task title: ");
        String title = scanner.nextLine();
        System.out.print("Enter due date (yyyy-MM-dd): ");
        String dateString = scanner.nextLine();
        Date dueDate = parseDate(dateString);

        String sql = "INSERT INTO tasks (title, due_date) VALUES (?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, title);
            pstmt.setDate(2, dueDate);
            pstmt.executeUpdate();
            System.out.println("Task added successfully.");
        }
    }

    private void updateTask(Scanner scanner) throws SQLException {
        System.out.print("Enter the task ID to update: ");
        int taskId = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter the new task title: ");
        String newTitle = scanner.nextLine();
        System.out.print("Enter the new due date (yyyy-MM-dd): ");
        String dateString = scanner.nextLine();
        Date newDueDate = parseDate(dateString);

        String sql = "UPDATE tasks SET title = ?, due_date = ? WHERE id = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, newTitle);
            pstmt.setDate(2, newDueDate);
            pstmt.setInt(3, taskId);
            int rowsUpdated = pstmt.executeUpdate();

            if (rowsUpdated > 0) {
                System.out.println("Task updated successfully.");
            } else {
                System.out.println("Task not found with ID: " + taskId);
            }
        }
    }

    private void deleteTask(Scanner scanner) throws SQLException {
        System.out.print("Enter the task ID to delete: ");
        int taskId = scanner.nextInt();

        String sql = "DELETE FROM tasks WHERE id = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setInt(1, taskId);
            int rowsDeleted = pstmt.executeUpdate();

            if (rowsDeleted > 0) {
                System.out.println("Task deleted successfully.");
            } else {
                System.out.println("Task not found with ID: " + taskId);
            }
        }
    }

    private void markTaskAsCompleted(Scanner scanner) throws SQLException {
        System.out.print("Enter the task ID to mark as completed: ");
        int taskId = scanner.nextInt();

        String sql = "UPDATE tasks SET is_completed = true WHERE id = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setInt(1, taskId);
            int rowsUpdated = pstmt.executeUpdate();

            if (rowsUpdated > 0) {
                System.out.println("Task marked as completed.");
            } else {
                System.out.println("Task not found with ID: " + taskId);
            }
        }
    }

    private Date parseDate(String dateString) {
        try {
            java.util.Date utilDate = DATE_FORMAT.parse(dateString);
            return new Date(utilDate.getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
