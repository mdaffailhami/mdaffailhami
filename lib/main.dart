import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_strategy/url_strategy.dart';
import 'screens/home/home_screen.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        dividerTheme: const DividerThemeData(space: 26),
        textTheme:
            GoogleFonts.latoTextTheme(ThemeData.dark().textTheme).copyWith(
          headlineMedium: const TextStyle(color: Colors.white),
          bodySmall: const TextStyle(fontSize: 13),
        ),
        colorScheme: const ColorScheme(
          primary: Color.fromARGB(255, 13, 90, 214),
          primaryContainer: Color(0xff082c6c),
          secondary: Color(0xfff4d47c),
          secondaryContainer: Color(0xffcba33e),
          surfaceBright: Color(0xff1f1f1f),
          // surface: Color(0xff242430),
          surface: Color(0xff121212),
          // background: Color(0xff1e1e28),
          error: Colors.red,
          onPrimary: Colors.white,
          onSecondary: Colors.white,
          onSurface: Colors.white,
          onError: Colors.white,
          brightness: Brightness.dark,
        ),
      ),
      title: 'Daffa Ilhami',
      home: const MyHomeScreen(),
    );
  }
}
