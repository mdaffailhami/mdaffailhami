import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/home/home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        dividerTheme: DividerThemeData(space: 26),
        textTheme:
            GoogleFonts.latoTextTheme(ThemeData.dark().textTheme).copyWith(
          headline4: TextStyle(color: Colors.white),
          caption: TextStyle(fontSize: 13),
        ),
        colorScheme: const ColorScheme(
          primary: Color(0xff2069e0),
          primaryVariant: Color(0xff082c6c),
          secondary: Color(0xfff4d47c),
          secondaryVariant: Color(0xffcba33e),
          surface: Color(0xff1f1f1f),
          background: Color(0xff121212),
          error: Colors.red,
          onPrimary: Colors.white,
          onSecondary: Colors.white,
          onSurface: Colors.white,
          onBackground: Colors.white,
          onError: Colors.white,
          brightness: Brightness.dark,
        ),
      ),
      title: 'Daffa Ilhami',
      home: const MyHomeScreen(),
    );
  }
}
