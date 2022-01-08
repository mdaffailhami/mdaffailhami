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
        textTheme:GoogleFonts.latoTextTheme(ThemeData.dark().textTheme),
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

// background: #141a32
// primary: #3d65fb
// primaryVariant: 
// secondary: #d4bf8
// secondaryVariant:
// Surface: #1e2746
// error: #B00020
// onPrimary: #ffffff
// onSecondary: #ffffff
// onBackground: #ffffff
// onError: #ffffff
// onSurface: #ffffff