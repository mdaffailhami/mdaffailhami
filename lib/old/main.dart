import 'package:flutter/material.dart';

import 'home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ThemeData darkTheme = ThemeData(
      brightness: Brightness.dark,
    );

    const TextTheme textTheme = TextTheme(
      headline1: TextStyle(
        fontSize: 40,
        fontWeight: FontWeight.w400,
        shadows: [
          Shadow(
            blurRadius: 1,
            offset: Offset(1, 1),
          ),
        ],
      ),
      headline3: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w400,
        shadows: [
          Shadow(
            blurRadius: 1,
          ),
        ],
      ),
    );

    return MaterialApp(
      themeMode: ThemeMode.dark,
      darkTheme: darkTheme.copyWith(
        colorScheme: darkTheme.colorScheme.copyWith(
          primary: const Color(0xFF212F3D),
          primaryVariant: const Color(0xFF1C2833),
          secondary: const Color(0xFF283593),
          secondaryVariant: const Color(0xFF1A237E),
        ),
        textTheme: textTheme,
      ),
      home: const MyHomeScreen(),
    );
  }
}
