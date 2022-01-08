import 'package:flutter/material.dart';

import 'components/about_me.dart';
import 'components/banner.dart';
import 'components/scaffold_background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: const Text('MDI'),
      ),
      body: Stack(
        children: [
          MyScaffoldBackground(),
          ListView(
            children: [
              MyBanner(),
              MyAboutMe(),
            ],
          ),
        ],
      ),
    );
  }
}
