package TaskManager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TaskManager {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/task_manager";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "vinothraj@283";

    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            TaskManagerApp app = new TaskManagerApp(connection);
            app.run();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
