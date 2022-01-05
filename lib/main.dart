import 'package:flutter/material.dart';

import 'banner.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(brightness: Brightness.dark),
      home: Scaffold(
        appBar: AppBar(
          title: const CircleAvatar(
            backgroundImage: AssetImage('assets/profile.jpg'),
          ),
        ),
        body: ListView(
          children: const [MyBanner()],
        ),
      ),
    );
  }
}


