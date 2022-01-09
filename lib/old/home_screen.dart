import 'package:flutter/material.dart';
import 'projects_section.dart';

import 'about_me.dart';
import 'banner.dart';
import 'my_skills_section.dart';
import 'parallax_background.dart';

class MyHomeScreen extends StatelessWidget {
  const MyHomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: const Text('MDI'),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: Stack(
        children: [
          const MyParallaxBackground(),
          ListView(
            children: [
              const MyBanner(),
              const MyAboutMe(),
              const MyMySkillsSection(),
              Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(10),
                    topRight: Radius.circular(10),
                  ),
                  color: Theme.of(context).colorScheme.primaryVariant,
                ),
                child: Padding(
                  padding: EdgeInsets.symmetric(
                    vertical: 20,
                    horizontal: MediaQuery.of(context).size.width * 0.1,
                  ),
                  child: Wrap(
                    runSpacing: 40,
                    children: const [
                      MyProjectsSection(),
                      MyProjectsSection(),
                    ],
                  ),
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}
